import { loadStripe, Stripe } from "@stripe/stripe-js";

// let stripePromise: Promise<Stripe | null>;
let stripePromise: Promise<Stripe | null>;

export const getStripe = () => {
  if (!stripePromise) {
    // stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY!);
    stripePromise = loadStripe(
      "pk_test_51LYtOAB08wFbK6gAg0DRgBLx9731cCkcHjBsNVdPAR6u6bNnKKjOwhovGoCkKgIm3VfsKShq7cLJJqJeUyjCfTOE00fya2Ffmh"
    );
  }

  return stripePromise;
};
