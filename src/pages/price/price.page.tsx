import { FC, useContext, useEffect, useState } from "react";

import { AiOutlineCheck } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext, UserAccount } from "../../context/auth.context";
import { UserSubscriptionService } from "../../services/user-subscription.service";
import { ProductPrice } from "../../types/stripe.types";
import { IUserData } from "../../types/user.types";
import { getStripe } from "../../config/stripe";
import { UserDataService } from "../../services/user-data.service";
import { Button } from "antd";

export const Price: FC = () => {
  const { user } = useContext(AuthContext) as UserAccount;
  const navigate = useNavigate();
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
    if (user) {
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
    } else {
      navigate("/login");
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

  return (
    <div className="w-full h-[1100px] flex flex-col justify-center items-center">
      <h1 className="text-3xl w-[300px] sm:text-5xl sm:w-[500px] xl:text-6xl xl:w-[650px] text-white font-bold font-thicccboi mt-32 text-center">
        Skorzystaj z oferty specjalnej
      </h1>
      <p className="text-[#898CA9] text-lg sm:text-2xl font-normal font-thicccbo w-[300px] sm:w-[800px] mt-4 sm:text-center">
        Cena pakietu będzie wzrastać wraz z ilością użytkowników - utrzymując
        nieprzerwanie subskrypcję masz gwarancję obecnej ceny.
      </p>
      <div className="w-[340px] h-[600px] sm:w-[400px] sm:h-[600px] bg-white rounded-lg flex flex-col items-center mt-10 z-10">
        <h2 className="text-5xl font-medium font-thicccboi mt-10">Premium</h2>
        <p className="text-lg text-[#898CA9] font-normal font-thicccboi mt-10">
          Jedna cena, zero ograniczeń.
        </p>
        <ul className="flex flex-col mt-3 gap-2">
          <li className="flex items-center gap-2 text-lg text-[#898CA9] font-normal font-thicccboi">
            <AiOutlineCheck />
            Pełny dostęp do aplikacji TradingApp
          </li>
          <li className="flex items-center gap-2 text-lg text-[#898CA9] font-normal font-thicccboi">
            <AiOutlineCheck />
            Zamknięta społeczność
          </li>
          <li className="flex items-center gap-2 text-lg text-[#898CA9] font-normal font-thicccboi">
            <AiOutlineCheck /> Wsparcie techniczne
          </li>
        </ul>
        {productPrice && (
          <div className="flex relative mt-0">
            <p className="text-7xl text-black font-thicccboi mt-10">
              {productPrice.unit_amount / 100}
            </p>
            <span className="absolute top-[40px] left-[-50px] text-2xl text-black font-thicccboi">
              PLN
            </span>
            <span className="absolute bottom-[80px] right-[-50px] text-2xl text-black font-thicccboi">
              /msc
            </span>
          </div>
        )}
        {userData?.subscriptionID ? (
          <Link
            className="flex justify-center items-center w-60 rounded-lg bg-[#0751D3] border-[transparent] hover:bg-[#0751D3]/[.6] py-3 text-white font-thicccboi font-medium"
            to="/settings/plans"
          >
            Subskrypcja Aktywna
          </Link>
        ) : (
          <Button
            className="w-60 rounded-lg bg-[#0751D3] border-[transparent] hover:bg-[#0751D3]/[.6]"
            size="large"
            type="primary"
            onClick={goToCheckout}
          >
            Subskrybuj
          </Button>
        )}
      </div>
    </div>
  );
};
