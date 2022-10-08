import { FC } from "react";
import shield from "../../../assets/shield.png";

export const DiscordSection: FC = () => {
  return (
    <section className="h-[600px] w-full flex flex-col items-center justify-center z-10 mt-10">
      <div className="h-[250px] w-[340px] max-w-4xl sm:w-[500px] sm:h-[350px] lg:w-[800px] flex flex-col items-center justify-center bg-[#1A1B23] rounded-[10px] sm:rounded-[40px] relative">
        <h1 className="text-xl sm:text-2xl w-[300px] sm:text-3xl sm:w-[500px] xl:text-4xl xl:w-[780px] text-white font-bold font-thicccboi text-center ">
          Dołącz do zamkniętej grupy na Discord
        </h1>
        <p className=" text-[12px]  sm:text-xs text-center mt-4 xl:text-base text-[#898CA9] font-normal font-thicccboi mt-8 w-[300px] sm:w-[430px]">
          Ucz się od innych, wymieniaj doświadczeniami i inwestuj razem z
          zamkniętą społecznością.
        </p>
        <a
          className="w-[140px] h-[40px] rounded-lg bg-gradient-to-r from-red-500 to-blue-500 text-white font-medium font-thicccboi mt-10 sm:mt-20 flex items-center justify-center"
          href="https://discord.gg/eZKFX3skvh"
        >
          Dołącz
        </a>
        <img
          className="absolute left-[-20px] sm:left-[-50px] top-[200px] sm:top-[250px] z-20 h-[100px] sm:h-[200px] "
          alt="shield"
          src={shield}
        />
      </div>
    </section>
  );
};
