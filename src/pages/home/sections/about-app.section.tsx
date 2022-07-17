import { FC } from "react";

import galaxyLogin from "../../../assets/phones/galaxy-login.svg";
import galaxySignal from "../../../assets/phones/galaxy-signal.svg";
import galaxyBuy from "../../../assets/phones/galaxy-buy.svg";
import galaxyCoins from "../../../assets/phones/galaxy-coins.svg";

export const AboutAppSection: FC = () => {
  return (
    <section className="flex flex-col w-full h-[2500px] gap-x-12 items-center z-10 bg-">
      <h1 className="text-2xl w-[300px] sm:text-5xl sm:w-[500px] xl:text-6xl xl:w-[780px] text-white font-bold font-thicccboi mt-32  text-center ">
        How to Trade With TradingApp ?
      </h1>
      <div className="flex gap-[270px] justify-between mt-[125px] relative">
        <img src={galaxyLogin} className="h-auto w-[270px] z-20" alt="phone" />
        <div className="hidden xl:inline absolute left-[-50px] top-[150px] bg-[#FCD434]/[.4] blur-[50px] w-[300px] h-[300px] z-10"></div>
        <div className="flex flex-col mt-24">
          <h2 className="text-white text-4xl font-black font-thicccbo">
            1. Login/Download app
          </h2>
          <p className="text-[#898CA9] text-2xl font-normal font-thicccbo w-[600px] mt-7">
            Separated they live in Bookmarks right at the coast of the famous
            Semantics, large language ocean Separated they live in Bookmarks
            right at the coast.
          </p>
        </div>
      </div>
      <div className="flex flex-row-reverse gap-[270px] justify-between relative">
        <img src={galaxySignal} className="h-auto w-[270px] z-20" alt="phone" />
        <div className="hidden xl:inline absolute right-[0px] top-[150px] bg-[#FCD434]/[.4] blur-[50px] w-[300px] h-[300px] z-10"></div>
        <div className="flex flex-col mt-24">
          <h2 className="text-white text-4xl font-black font-thicccbo">
            2. Get Signals
          </h2>
          <p className="text-[#898CA9] text-2xl font-normal font-thicccbo w-[600px] mt-7">
            Separated they live in Bookmarks right at the coast of the famous
            Semantics, large language ocean Separated they live in Bookmarks
            right at the coast.
          </p>
        </div>
      </div>
      <div className="flex gap-[270px] justify-between relative">
        <img src={galaxyBuy} className="h-auto w-[270px] z-20" alt="phone" />
        <div className="hidden xl:inline absolute left-[-50px] top-[150px] bg-[#FCD434]/[.4] blur-[50px] w-[300px] h-[300px] z-10"></div>
        <div className="flex flex-col mt-24">
          <h2 className="text-white text-4xl font-black font-thicccbo">
            3. Buy
          </h2>
          <p className="text-[#898CA9] text-2xl font-normal font-thicccbo w-[600px] mt-7">
            Separated they live in Bookmarks right at the coast of the famous
            Semantics, large language ocean Separated they live in Bookmarks
            right at the coast.
          </p>
        </div>
      </div>
      <div className="flex flex-row-reverse gap-[270px] justify-between">
        <img src={galaxyCoins} className="h-auto w-[270px] z-20" alt="phone" />
        <div className="flex flex-col mt-24">
          <h2 className="text-white text-4xl font-black font-thicccbo">
            4. Sell
          </h2>
          <p className="text-[#898CA9] text-2xl font-normal font-thicccbo w-[600px] mt-7">
            Separated they live in Bookmarks right at the coast of the famous
            Semantics, large language ocean Separated they live in Bookmarks
            right at the coast.
          </p>
        </div>
      </div>
    </section>
  );
};
