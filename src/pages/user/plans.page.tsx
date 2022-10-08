import { message, Spin } from "antd";
import { FC, useEffect, useState, useContext } from "react";
import { CardPlanSubscription } from "../../components/subscription";
import { getStripe } from "../../config/stripe";
import { AuthContext, UserAccount } from "../../context/auth.context";
import { UserDataService } from "../../services/user-data.service";
import { UserSubscriptionService } from "../../services/user-subscription.service";
import { Subscription, ProductPrice } from "../../types/stripe.types";
import { IUserData } from "../../types/user.types";
import { DateTimeConverter } from "../../utils/dateConverter";

export const SubscriptionPlans: FC = () => {
  const { user } = useContext(AuthContext) as UserAccount;
  const [productPrice, setProductPrice] = useState<ProductPrice>();
  const [userData, setUserData] = useState<IUserData>();
  const [subscriptionData, setSubscriptionData] = useState<
    Subscription | undefined
  >();

  const getUserData = async () => {
    const respUserData = await UserDataService.getUserDataID(user.uid);
    setUserData(respUserData);
    if (respUserData) {
      const resSubData = await UserSubscriptionService.getSubscriptionID(
        respUserData.subscriptionID
      );
      setSubscriptionData(resSubData);
    }
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

  const deleteSubscription = async () => {
    if (userData) {
      const result = await UserSubscriptionService.deleteSubscription(
        userData.subscriptionID
      );
      if (result.status === 200) {
        const deleteData = await UserDataService.setSubscriptionID(
          user.uid,
          ""
        );
        deleteData.status === 200 &&
          message.success("Unsubscription successful");
        getUserData();
      }
      result.status === 400 &&
        message.error(
          "Problem with deleting subscription! Please contact with administrator"
        );
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
    <div className="w-full h-[600px] bg-white rounded-lg flex overflow-auto">
      <div className="min-w-[450px] h-700 flex flex-col p-4">
        <p className="font-roboto font-medium text-base">
          End subscription:
          <span className="font-bold">
            {DateTimeConverter(subscriptionData?.current_period_start)}-
            {DateTimeConverter(subscriptionData?.current_period_end)}
          </span>
        </p>
        <p className="font-roboto font-medium text-base">
          Your plan: <span className="font-bold">Starter</span>
        </p>
        <p className="font-roboto font-medium text-base">
          Price: <span className="font-bold">100$</span>
        </p>
      </div>
      <div className="w-full h-full min-w-[300px] flex p-10 justify-center">
        <CardPlanSubscription
          price={productPrice.unit_amount / 100}
          subscribe={goToCheckout}
          unsubscribe={deleteSubscription}
          status={!!userData?.subscriptionID}
        />
      </div>
    </div>
  );
};
