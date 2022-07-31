import { FC } from "react";

import { BiBrain } from "react-icons/bi";
import { GoSettings } from "react-icons/go";
import { IoAnalyticsOutline } from "react-icons/io5";

export const InfoSection: FC = () => {
  return (
    <section className="w-full h-[800px] flex flex-col gap-y-12 items-center justify-center sm:flex-row sm:h-[400px] sm:gap-x-12">
      <div className="w-[400px] h-[200px] flex flex-col items-center justify-center bg-[#1A1B23] rounded-2xl z-10 sm:w-[440px] sm:h-[250px]">
        <span className="w-[50px] h-[50px] text-3xl text-white rounded-[50%] mb-4 flex items-center justify-center bg-gradient-to-r from-red-500 to-blue-500 sm:w-[60px] sm:h-[60px] sm:text-4xl">
          <BiBrain />
        </span>
        <p className="text-white text-lg font-bold font-thicccboi sm:text-xl">
          Artificial Inteligence
        </p>
        <p className="text-white/[.6] text-sm text-center font-normal font-thicccboi mt-3.5 w-[300px] sm:text-base">
          Investing may look complex, but it doesn’t have to be. Save time and
          invest with the power of AI.
        </p>
      </div>
      <div className="w-[400px] h-[200px] flex flex-col items-center justify-center bg-[#1A1B23] rounded-2xl z-10 sm:w-[440px] sm:h-[250px]">
        <span className="w-[50px] h-[50px] text-3xl text-white rounded-[50%] mb-4 flex items-center justify-center bg-gradient-to-r from-red-500 to-blue-500 sm:w-[60px] sm:h-[60px] sm:text-4xl">
          <GoSettings />
        </span>
        <p className="text-white text-lg font-bold font-thicccboi sm:text-xl">
          Full Controll
        </p>
        <p className="text-white/[.6] text-sm text-center font-normal font-thicccboi mt-3.5 w-[300px] sm:text-base">
          You have full control. You can customize TradingApp perfectly to suit
          your needs.
        </p>
      </div>
      <div className="w-[400px] h-[200px] flex flex-col items-center justify-center bg-[#1A1B23] rounded-2xl z-10 sm:w-[440px] sm:h-[250px]">
        <span className="w-[50px] h-[50px] text-3xl text-white rounded-[50%] mb-4 flex items-center justify-center bg-gradient-to-r from-red-500 to-blue-500 sm:w-[60px] sm:h-[60px] sm:text-4xl">
          <IoAnalyticsOutline />
        </span>
        <p className="text-white text-lg font-bold font-thicccboi sm:text-xl">
          Advanced Analytics
        </p>
        <p className="text-white/[.6] text-sm text-center font-normal font-thicccboi mt-3.5 w-[300px] sm:text-base">
          TradingApp is based on 11 of the most famous indicators. Buying and
          selling prices are calculated by the Fibonacci value individually for
          each currency.
        </p>
      </div>
    </section>
  );
};
