import { FC, useCallback, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext, UserAccount } from "../../context/auth.context";
import { UserDataService } from "../../services/user-data.service";
import { UserSubscriptionService } from "../../services/user-subscription.service";
import { ICustomer, ISubscription } from "../../types/stripe.types";

export const Subscription: FC = () => {
  const { logOut, user } = useContext(AuthContext) as UserAccount;
  const [subscription, setSubscritpion] = useState<ISubscription[]>([]);
  const [customers, setCustomers] = useState<ICustomer[]>([]);

  const getSubscriptionData = useCallback(async () => {
    try {
      const allCustomers = await UserSubscriptionService.getAllCustomers();
      const allSubscriptions =
        await UserSubscriptionService.getAllSubscription();

      setCustomers(allCustomers.data);
      setSubscritpion(allSubscriptions.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const deleteSubscription = async () => {
    const keysToRemove = ["sub", "cus"];
    try {
      const accountData = await UserDataService.getUserDataID(user.uid);
      await UserSubscriptionService.deleteSubscription(
        accountData.data()?.subscriptionID
      );
      await UserSubscriptionService.deleteCustomer(
        accountData.data()?.customerID
      );
      await UserDataService.deleteSubscription(user.uid);
      keysToRemove.forEach((k) => localStorage.removeItem(k));

      setSubscritpion([]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSubscriptionData();
  }, [getSubscriptionData]);

  useEffect(() => {
    const getSubscriptionDataToDB = () => {
      customers.map((item) => {
        return (
          item.email === user.email && [
            UserDataService.seCustomerID(`${user.uid}`, `${item.id}`),
            localStorage.setItem("cus", item.id),
          ]
        );
      });

      subscription.map((item) => {
        return (
          item.customer === localStorage.getItem("cus") && [
            UserDataService.setSubscriptionID(`${user.uid}`, `${item.id}`),
            localStorage.setItem("sub", item.id),
          ]
        );
      });
    };

    getSubscriptionDataToDB();
  }, [customers, subscription, user.email, user.uid]);

  if (!user) return null;

  return (
    <div>
      <header className="w-full h-20 flex bg-[#0B0B0F] fixed z-20">
        <div className="mx-8 w-full h-20 xl:mx-36 flex items-center justify-between">
          <Link
            to="/"
            className="text-white text-2xl font-normal font-jura flex gap-2 items-end justify-center"
          >
            <img alt="logo" src="logo.svg" />
            TradingApp
          </Link>
          <button
            type="button"
            className="cursor-pointer text-white text-sm sm:text-base font-medium font-thicccboi rounded-lg py-2 px-3 bg-gradient-to-r from-red-500 to-blue-500"
            onClick={logOut}
          >
            Wyloguj się
          </button>
        </div>
      </header>
      <main>
        <div className="w-full h-[1000px] flex flex-col justify-center items-center">
          <h1 className="text-2xl w-[300px] sm:text-4xl sm:w-[500px] xl:text-6xl xl:w-[650px] text-white font-bold font-thicccboi mt-22 text-center">
            Informacje o Twojej subskrybcji
          </h1>
          <div className="w-[340px] h-[500px] sm:w-[400px] sm:h-[500px] bg-white rounded-lg flex flex-col items-center mt-10 relative">
            <h2 className="text-5xl font-medium font-thicccboi mt-10">
              Premium
            </h2>
            <ul className="flex flex-col mt-10 gap-2">
              {subscription.map((item) => {
                console.log(item);

                return (
                  item.customer === localStorage.getItem("cus") && (
                    <>
                      <li className="flex items-center gap-2 text-lg text-[#898CA9] font-normal font-thicccboi">
                        - Status:
                        <span className="bg-[green] p-2 rounded-lg text-white">
                          {item.status}
                        </span>
                      </li>
                      <li className="flex items-center gap-2 text-lg text-[#898CA9] font-normal font-thicccboi">
                        - Start subskrypcji:{" "}
                        {new Date(item.start_date * 1000).toLocaleString()}
                      </li>
                      <li className="flex items-center gap-2 text-lg text-[#898CA9] font-normal font-thicccboi">
                        - Kolejna płatność:{" "}
                        {new Date(
                          item.current_period_end * 1000
                        ).toLocaleString()}
                      </li>
                      <li className="flex items-center gap-2 text-lg text-[#898CA9] font-normal font-thicccboi">
                        - Cena: {item.plan.amount / 100} pln/msc
                      </li>
                    </>
                  )
                );
              })}
            </ul>
            {localStorage.getItem("sub") !== null ? (
              <button
                className="mb-10 rounded-lg bg-[blue] px-8 py-3 text-white font-thicccboi font-medium absolute bottom-0"
                onClick={deleteSubscription}
              >
                Anuluj Subskrypcję
              </button>
            ) : (
              <Link
                className="mt-10 rounded-lg bg-[blue] px-8 py-3 text-white font-thicccboi font-medium"
                to="/price"
              >
                Subskrybuj
              </Link>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};
