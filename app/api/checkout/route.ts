import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { products, bundle, getProductById } from "@/lib/products";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "sk_test_placeholder", {
  apiVersion: "2023-10-16",
});

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN || "https://templatenest.vercel.app";

interface CheckoutRequest {
  priceType: "single" | "bundle";
  productId?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: CheckoutRequest = await request.json();
    const { priceType, productId } = body;

    let lineItems: Stripe.Checkout.SessionCreateParams.LineItem[];
    let metadata: Record<string, string>;

    if (priceType === "bundle") {
      lineItems = [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: bundle.name,
              description: bundle.description,
              images: products.map((p) => p.images[0]),
            },
            unit_amount: bundle.price * 100,
          },
          quantity: 1,
        },
      ];
      metadata = {
        type: "bundle",
        productIds: products.map((p) => p.id).join(","),
      };
    } else {
      const product = productId ? getProductById(productId) : products[0];
      if (!product) {
        return NextResponse.json(
          { error: "Product not found" },
          { status: 404 }
        );
      }

      lineItems = [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: product.name,
              description: product.description,
              images: [product.images[0]],
            },
            unit_amount: product.price * 100,
          },
          quantity: 1,
        },
      ];
      metadata = {
        type: "single",
        productIds: product.id,
      };
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${DOMAIN}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${DOMAIN}/#pricing`,
      metadata,
      billing_address_collection: "auto",
      allow_promotion_codes: true,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
