import { FC } from "react";

import { BiBrain } from "react-icons/bi";
import { GoSettings } from "react-icons/go";
import { IoAnalyticsOutline } from "react-icons/io5";

export const InfoSection: FC = () => {
  return (
    <section className="flex w-full h-[400px] gap-x-12 items-center justify-center">
      <div className=" w-[440px] h-[250px] flex flex-col items-center justify-center bg-[#1A1B23] rounded-2xl z-10">
        <span className="w-[60px] h-[60px] text-white rounded-[50%] mb-4 flex items-center justify-center text-4xl bg-gradient-to-r from-red-500 to-blue-500">
          <BiBrain />
        </span>
        <p className=" text-white text-xl font-bold font-thicccboi">
          Artificial Inteligence
        </p>
        <p className=" text-white/[.6] text-base text-center font-normal font-thicccboi mt-3.5 w-[300px]">
          Investing may look complex, but it doesn’t have to be. Save time and
          invest with the power of AI.{" "}
        </p>
      </div>
      <div className=" w-[440px] h-[250px] flex flex-col items-center justify-center bg-[#1A1B23] rounded-2xl z-10">
        <span className="w-[60px] h-[60px] text-white rounded-[50%] mb-4 flex items-center justify-center text-4xl bg-gradient-to-r from-red-500 to-blue-500">
          <GoSettings />
        </span>
        <p className=" text-white text-xl font-bold font-thicccboi">
          Full Controll
        </p>
        <p className=" text-white/[.6] text-base text-center font-normal font-thicccboi mt-3.5 w-[300px]">
          You have full control. You can customize TradingApp perfectly to suit
          your needs.
        </p>
      </div>
      <div className=" w-[440px] h-[250px] flex flex-col items-center justify-center bg-[#1A1B23] rounded-2xl z-10">
        <span className="w-[60px] h-[60px] text-white rounded-[50%] mb-4 flex items-center justify-center text-4xl bg-gradient-to-r from-red-500 to-blue-500">
          <IoAnalyticsOutline />
        </span>
        <p className=" text-white text-xl font-bold font-thicccboi">
          Advanced Analytics
        </p>
        <p className=" text-white/[.6] text-base text-center font-normal font-thicccboi mt-3.5 w-[300px]">
          TradingApp is based on 11 of the most famous indicators. Buying and
          selling prices are calculated by the Fibonacci value individually for
          each currency.
        </p>
      </div>
    </section>
  );
};
