import { Result, Spin } from "antd";
import { FC, useEffect, useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext, UserAccount } from "../../context/auth.context";
import { UserDataService } from "../../services/user-data.service";
import { UserSubscriptionService } from "../../services/user-subscription.service";

export const SuccessOrderPage: FC = () => {
  const { user } = useContext(AuthContext) as UserAccount;
  const { id } = useParams();

  const [checkoutData, setCheckoutData] = useState<any>();

  const getOrderSessionResult = async () => {
    try {
      if (id && user.uid) {
        const respCheckout =
          await UserSubscriptionService.getCheckoutSessionData(id);
        setCheckoutData(respCheckout.status);

        if (user.uid && respCheckout.subscription) {
          await UserDataService.setSubscriptionID(
            user.uid,
            respCheckout.subscription
          );
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      getOrderSessionResult();
    }
  }, [user]);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      {checkoutData ? (
        <Result
          status="success"
          title="Great! You have successfully purchased access to Our System."
          extra={[
            <Link className="bg" to="/dashboard" type="primary" key="console">
              Back to Dashboard
            </Link>,
          ]}
        />
      ) : (
        <div className="flex flex-col items-center justify-center gap-4">
          <Spin size="large" />
          <h1 className="font-roboto font-bold text-2xl">Processing...</h1>
        </div>
      )}
    </div>
  );
};
