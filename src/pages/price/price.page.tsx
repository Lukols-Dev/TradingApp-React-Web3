import { FC, useEffect, useState } from "react";

import { AiOutlineCheck } from "react-icons/ai";
import { UserSubscriptionService } from "../../services/user-subscription.service";
import { ProductPrice } from "../../types/stripe.types";

export const Price: FC = () => {
  const [productPrice, setProductPrice] = useState<ProductPrice>();

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

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="w-full h-[900px] flex justify-center items-center gap-20">
      <div className="w-[400px] h-[500px] bg-white rounded-lg flex flex-col items-center">
        <h2 className="text-4xl font-medium font-thicccboi mt-10">Premium</h2>
        <p className="text-lg text-[#898CA9] font-normal font-thicccboi mt-10">
          One price, zero restrictions.
        </p>
        <ul className="flex flex-col mt-3 gap-2">
          <li className="flex items-center gap-2 text-sm text-[#898CA9] font-normal font-thicccboi">
            <AiOutlineCheck /> Premium Trading Bot
          </li>
          <li className="flex items-center gap-2 text-sm text-[#898CA9] font-normal font-thicccboi">
            <AiOutlineCheck /> Closed Community
          </li>
          <li className="flex items-center gap-2 text-sm text-[#898CA9] font-normal font-thicccboi">
            <AiOutlineCheck /> 24h/7 Support
          </li>
        </ul>
        {productPrice && (
          <div className="flex relative mt-0">
            <p className="text-8xl text-black font-thicccboi mt-10">
              {productPrice.unit_amount / 100}
            </p>
            <span className="absolute top-[40px] left-[-40px] text-2xl text-black font-thicccboi">
              {productPrice.currency}
            </span>
            <span className="absolute bottom-[10px] right-[-40px] text-2xl text-black font-thicccboi">
              /mo
            </span>
          </div>
        )}

        <button className="mt-10 rounded-lg bg-[blue] px-8 py-3 text-white font-thicccboi font-medium">
          Choose Plan
        </button>
      </div>
    </div>
  );
};
