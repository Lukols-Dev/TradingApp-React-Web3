import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { FC } from "react";
import { CheckoutForm } from "../../components/subscription";

const stripePromise = loadStripe("");

export const PaymentCheckout: FC = () => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};
