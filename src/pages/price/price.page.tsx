import { FC, useEffect, useState } from "react";

import { AiOutlineCheck } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CheckoutForm } from "../../components/subscription";
import { UserSubscriptionService } from "../../services/user-subscription.service";
import { ProductPrice } from "../../types/stripe.types";

export const Price: FC = () => {
  const [productPrice, setProductPrice] = useState<ProductPrice>();
  // const [subscription, setSubscritpion] = useState<ISubscription>();

  const getProduct = async () => {
    const resp = await UserSubscriptionService.getProductID(
      `${process.env.REACT_APP_STRIPE_PRODUCT}`
    );
    if (resp) {
      const respPrice = await UserSubscriptionService.getProductPriceID(
        resp.default_price
      );
      setProductPrice(respPrice);
    }
  };

  const checkSubscription = () => {
    return !!localStorage.getItem("sub");
  };

  useEffect(() => {
    getProduct();
    checkSubscription();
  }, []);

  return (
    <div className="w-full h-[1000px] flex flex-col justify-center items-center">
      <h1 className="text-2xl w-[300px] sm:text-4xl sm:w-[500px] xl:text-6xl xl:w-[650px] text-white font-bold font-thicccboi mt-22 text-center">
        Skorzystaj z oferty specjalnej
      </h1>
      <p className="text-[#898CA9] text-lg sm:text-2xl font-normal font-thicccbo w-[300px] sm:w-[800px] mt-4 sm:text-center">
        Cena pakietu będzie wzrastać wraz z ilością użytkowników - utrzymując
        nieprzerwanie subskrypcję masz gwarancję obecnej ceny.
      </p>
      <div className="w-[340px] h-[500px] sm:w-[400px] sm:h-[500px] bg-white rounded-lg flex flex-col items-center mt-10 z-10">
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
              {productPrice.currency.toUpperCase()}
            </span>
            <span className="absolute bottom-[0px] right-[-50px] text-2xl text-black font-thicccboi">
              /msc
            </span>
          </div>
        )}
        {checkSubscription() ? (
          <Link
            className="mt-10 rounded-lg bg-[blue] px-8 py-3 text-white font-thicccboi font-medium"
            to="/dashboard"
          >
            Aktywna
          </Link>
        ) : (
          <CheckoutForm />
        )}
      </div>
    </div>
  );
};
