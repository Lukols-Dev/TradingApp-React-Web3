import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { FC } from "react";
import { CheckoutForm } from "../../components/subscription";

const stripePromise = loadStripe(
  "pk_test_51LNfR6A31XL5oAWC8yAy0AluOs6QvN2TMFNH40vG4T4h2S4ZyRkbxM6m6sD2joWMmBU9B9H9WvSKWsiE5bkRuWoZ00uBd5nof6"
);

export const PaymentCheckout: FC = () => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};
