import { FC } from "react";
import shield from "../../../assets/shield.png";

export const DiscordSection: FC = () => {
  return (
    <section className="flex w-full h-[600px] items-center justify-center z-10">
      <div className="w-full max-w-4xl h-[350px] flex flex-col items-center justify-center bg-[#1A1B23] rounded-[40px] relative">
        <h1 className="text-2xl w-[300px] sm:text-3xl sm:w-[500px] xl:text-4xl xl:w-[780px] text-white font-bold font-thicccboi mt-10 text-center ">
          Join a closed community on Discord
        </h1>
        <p className=" text-[10px] sm:text-xs text-center mt-4 xl:text-base text-[#898CA9] font-normal font-thicccboi mt-8 w-[400px]">
          Learn from others, exchange experience and invest together with a
          closed community.
        </p>
        <a
          className="w-[140px] h-[40px] rounded-lg bg-gradient-to-r from-red-500 to-blue-500 text-white font-medium font-thicccboi mt-20 flex items-center justify-center"
          href="https://discord.gg/QtgsbeCf"
        >
          Join us
        </a>
        <img
          className="absolute left-[-50px] top-[250px] z-20 h-[200px] "
          alt="shield"
          src={shield}
        />
      </div>
    </section>
  );
};
