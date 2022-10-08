import { FC } from "react";

import learnDash from "../../../assets/learn-dashboard.png";

export const LearningSection: FC = () => {
  return (
    <section className="w-full h-[500px] flex flex-col items-center justify-center z-10 mt-40 sm:h-[700px] sm:mt-10 mb-20 sm:flex-col lg:mt-10 mb-20 lg:flex-row">
      <div className="flex items-center justify-center w-[340px] sm:min-w-[400px] sm:w-[600px] lg:min-w-[800px] lg:w-[1500px]">
        <img
          className="rounded-lg border-white/[.3] border-2"
          alt="learn"
          src={learnDash}
        />
      </div>
      <div className="w-full h-full flex flex-col items-center sm:items-start">
        <h1 className="text-white text-xl font-medium font-thicccbo w-[340px] sm:ml-20 mt-10 sm:mt-4 sm:text-4xl sm:w-[600px]">
          Darmowe materiały szkoleniowe
        </h1>
        <p className="text-[#898CA9] text-base  font-normal font-thicccbo w-[340px] sm:w-[510px] sm:ml-20 sm:text-2xl mt-10">
          Jeśli chcesz dowiedzieć się więcej na temat aplikacji - sposobu jej
          działania oraz konfiguracji, zapoznaj się z przygotowanymi przez nas
          materiałami.
        </p>
        <p className="text-[#898CA9] text-base  font-normal font-thicccbo w-[340px] sm:w-[510px] sm:ml-20 sm:text-2xl mt-4">
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
