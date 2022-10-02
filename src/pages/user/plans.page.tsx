import { Spin } from "antd";
import { FC, useEffect, useState, useContext } from "react";
import { CardPlanSubscription } from "../../components/subscription";
import { getStripe } from "../../config/stripe";
import { AuthContext, UserAccount } from "../../context/auth.context";
import { UserDataService } from "../../services/user-data.service";
import { UserSubscriptionService } from "../../services/user-subscription.service";
import { ProductPrice } from "../../types/stripe.types";
import { IUserData } from "../../types/user.types";

export const SubscriptionPlans: FC = () => {
  const { user } = useContext(AuthContext) as UserAccount;
  const [productPrice, setProductPrice] = useState<ProductPrice>();
  const [userData, setUserData] = useState<IUserData>();

  const getUserData = async () => {
    const respUserData = await UserDataService.getUserDataID(user.uid);
    setUserData(respUserData);
  };

  const getProduct = async () => {
    const resp = await UserSubscriptionService.getProductID(
      `prod_MNAgZgxmSBsaFi`
    );
    if (resp) {
      const respPrice = await UserSubscriptionService.getProductPriceID(
        resp.default_price
      );
      setProductPrice(respPrice);
    }
  };

  const goToCheckout = async () => {
    const stripe = await getStripe();

    if (stripe && userData) {
      const stripeResp = await UserSubscriptionService.createCheckoutSession(
        "price_1LeQLJA31XL5oAWCfo8CxEgW",
        userData.customerID
      );

      const { error } = await stripe.redirectToCheckout({
        sessionId: stripeResp,
      });
      console.log("Stripe checkout error", error);
    }
  };

  useEffect(() => {
    if (user) {
      getUserData();
    }
  }, [user]);

  useEffect(() => {
    getProduct();
  }, []);

  if (!productPrice) {
    return (
      <div className="w-full h-full bg-white rounded-lg flex justify-center items-center">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-white rounded-lg flex overflow-auto">
      <div className="w-[300px] min-w-[300px] h-full flex flex-col p-4">
        <p className="font-roboto font-medium text-base">
          Start subscription: 10.10.2022
        </p>
        <p className="font-roboto font-medium text-base">
          End subscription: 10.10.2022
        </p>
        <p className="font-roboto font-medium text-base">
          Next payment: 10.10.2022
        </p>
        <p className="font-roboto font-medium text-base">Price: 10$</p>
      </div>
      <div className="w-full h-full min-w-[300px] flex p-10 justify-center">
        <CardPlanSubscription
          price={productPrice.unit_amount / 100}
          subscribe={goToCheckout}
          status={!!userData?.subscriptionID}
        />
      </div>
    </div>
  );
};
