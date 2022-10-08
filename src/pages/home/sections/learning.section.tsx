import { FC } from "react";

import learnDash from "../../../assets/learn-dashboard.png";

export const LearningSection: FC = () => {
  return (
    <section className="w-full h-[500px] gap-10 flex flex-col items-center justify-center z-10 mt-40 sm:h-[500px] sm:mt-40 sm:flex-col lg:flex-row">
      <div className="flex items-center justify-center w-[340px] relative lg:bottom-32 sm:min-w-[400px] sm:w-[600px] lg:min-w-[600px] lg:w-[600px]">
        <img
          className="rounded-lg border-white/[.3] border-2"
          alt="learn"
          src={learnDash}
        />
      </div>
      <div className="w-[470px] h-full flex flex-col items-center sm:items-start">
        <h1 className="text-white text-xl font-medium font-thicccbo w-[340px] mt-10 sm:mt-4 sm:text-2xl sm:w-[600px]">
          Darmowe materiały szkoleniowe
        </h1>
        <p className="text-[#898CA9] text-base  font-normal font-thicccbo w-[340px] sm:w-[470px] sm:text-lg mt-4">
          Jeśli chcesz dowiedzieć się więcej na temat aplikacji - sposobu jej
          działania oraz konfiguracji, sprawdź nasze materiały.
        </p>
        <p className="text-[#898CA9] text-base  font-normal font-thicccbo w-[340px] sm:w-[470px] sm:text-lg mt-4">
          Dodatkowo znajdziesz tam zalecenia oraz wskazówki, dzięki którym Twoja
          szansa na zyskowne transakcje zostanie zwiększona.
        </p>
        <a
          className=" flex items-center justify-center cursor-pointer text-white text-base font-bold font-thicccboi border-[1px] border-solid border-white rounded-lg py-3 px-8 w-[150px] sm:ml-20 mt-10"
          href="https://tradingapp.gitbook.io/tradingapp/"
        >
          Rozpocznij
        </a>
      </div>
    </section>
  );
};
