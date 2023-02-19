import { FC, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { getStripe } from "../../config/stripe";
import { AuthContext, UserAccount } from "../../context/auth.context";

export const CheckoutForm: FC = () => {
  const { user } = useContext(AuthContext) as UserAccount;
  const [stripeError, setStripeError] = useState<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [__isLoading, setLoading] = useState<any>(false);

  if (user) {
    const options = {
      lineItems: [
        {
          price: `${process.env.REACT_APP_STRIPE_PRICE}`,
          quantity: 1,
        },
      ],
      mode: "subscription" as any,
      successUrl: `${window.location.origin}/dashboard`,
      cancelUrl: `${window.location.origin}/`,
      customerEmail: `${user.email}`,
    };

    const redirectToCheckout = async () => {
      setLoading(true);
      console.log("redirectToCheckout");

      const stripe = await getStripe();

      if (stripe) {
        const { error } = await stripe.redirectToCheckout(options);
        console.log("Stripe checkout error", error);
        if (error) setStripeError(error.message);
        setLoading(false);
      }
    };

    if (stripeError) alert(stripeError);

    return (
      <button
        className="mt-10 rounded-lg bg-[blue] px-8 py-3 text-white font-thicccboi font-medium"
        onClick={redirectToCheckout}
      >
        Subskrybuj
      </button>
    );
  }

  return (
    <Link
      className="mt-10 rounded-lg bg-[blue] px-8 py-3 text-white font-thicccboi font-medium"
      to="/login"
    >
      Subskrybuj
    </Link>
  );
};
