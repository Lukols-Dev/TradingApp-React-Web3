import { FC } from "react";
import shield from "../../../assets/shield.png";

export const DiscordSection: FC = () => {
  return (
    <section className="flex w-full h-[600px] items-center justify-center z-10 relative">
      <div className="w-full max-w-4xl h-[350px] flex flex-col items-center justify-center bg-[#1A1B23] rounded-[40px] overflow-hidden relative">
        <h1 className="text-2xl w-[300px] sm:text-3xl sm:w-[500px] xl:text-4xl xl:w-[780px] text-white font-bold font-thicccboi mt-10 text-center ">
          Join a closed community on Discord
        </h1>
        <p className=" text-[10px] sm:text-xs text-center mt-4 xl:text-base text-[#898CA9] font-normal font-thicccboi mt-8">
          Buy and sell with TradingApp. The app assist any trader at any level.
        </p>
        <button className="w-[140px] h-[40px] rounded-lg bg-gradient-to-r from-red-500 to-blue-500 text-white font-medium font-thicccboi mt-20">
          Join us
        </button>
        <div className="hidden xl:inline absolute left-[-400px] bottom-[-200px] bg-[#FF4141] blur-[200px] w-[400px] h-[400px] z-10"></div>
      </div>
      <img
        className="absolute left-[100px] top-[350px] z-20 h-[200px] "
        alt="shield"
        src={shield}
      />
    </section>
  );
};
