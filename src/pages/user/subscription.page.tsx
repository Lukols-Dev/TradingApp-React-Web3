import { FC, useCallback, useContext, useEffect, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CheckoutForm } from "../../components/subscription";
import { AuthContext, UserAccount } from "../../context/auth.context";
import { UserDataService } from "../../services/user-data.service";
import { UserSubscriptionService } from "../../services/user-subscription.service";
import { ICustomer, ISubscription } from "../../types/stripe.types";

export const Subscription: FC = () => {
  const { logOut, user } = useContext(AuthContext) as UserAccount;
  const [subscription, setSubscritpion] = useState<ISubscription[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [customers, setCustomers] = useState<ICustomer[]>([]);
  // const [currUser, setCurrUser] = useState<any>();

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
    try {
      const accountData = await UserDataService.getUserDataID(user.uid);
      await UserSubscriptionService.deleteSubscription(
        accountData.data()?.subscriptionID
      );
      await UserDataService.setSubscriptionID(`${user.uid}`, ``);
      localStorage.removeItem("sub");
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
            className="cursor-pointer text-white text-base  font-medium font-thicccboi rounded-lg py-2 px-3 bg-gradient-to-r from-red-500 to-blue-500"
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
          <div className="w-[340px] h-[500px] sm:w-[400px] sm:h-[500px] bg-white rounded-lg flex flex-col items-center mt-10">
            <h2 className="text-5xl font-medium font-thicccboi mt-10">
              Premium
            </h2>
            <p className="text-lg text-[#898CA9] font-normal font-thicccboi mt-10">
              Jedna cena, zero ograniczeń.
            </p>
            <ul className="flex flex-col mt-3 gap-2">
              <li className="flex items-center gap-2 text-lg text-[#898CA9] font-normal font-thicccboi">
                - Status: active
              </li>
              <li className="flex items-center gap-2 text-lg text-[#898CA9] font-normal font-thicccboi"></li>
              <li className="flex items-center gap-2 text-lg text-[#898CA9] font-normal font-thicccboi">
                <AiOutlineCheck /> Wsparcie techniczne
              </li>
            </ul>
            <div className="flex relative mt-0">
              <p className="text-7xl text-black font-thicccboi mt-10">19.99</p>
              <span className="absolute top-[40px] left-[-50px] text-2xl text-black font-thicccboi">
                PLN
              </span>
              <span className="absolute bottom-[0px] right-[-50px] text-2xl text-black font-thicccboi">
                /msc
              </span>
            </div>
            {localStorage.getItem("sub") !== null ? (
              <button
                className="mt-10 rounded-lg bg-[blue] px-8 py-3 text-white font-thicccboi font-medium"
                onClick={deleteSubscription}
              >
                Anuluj Subskrypcję
              </button>
            ) : (
              <CheckoutForm />
            )}
          </div>
        </div>
      </main>
    </div>
  );
};
