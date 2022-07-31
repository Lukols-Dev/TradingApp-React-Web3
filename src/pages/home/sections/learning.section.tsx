import { FC } from "react";

import learnDash from "../../../assets/learn-dashboard.png";

export const LearningSection: FC = () => {
  return (
    <section className="w-full h-[500px] flex flex-col items-center justify-center z-10 mt-40 mb-20 sm:flex-row">
      <div className="flex items-center justify-center w-[400px] sm:min-w-[800px] sm:w-[1500px]">
        <img
          className="rounded-lg border-white/[.3] border-2"
          alt="learn"
          src={learnDash}
        />
      </div>
      <div className="w-full h-full flex flex-col items-center sm:items-start">
        <h1 className="text-white text-xl font-medium font-thicccbo w-[400px] sm:ml-20 mt-20 sm:text-4xl sm:w-[500px]">
          Become a better investor with our training materials!
        </h1>
        <p className="text-[#898CA9] text-base  font-normal font-thicccbo w-[400px] sm:ml-20 sm:text-2xl mt-10">
          Take a look at our meterials, in which we explain to you in detail how
          our system works and provide you with the necessary knowledge on chart
          analysis.
        </p>
        <a
          className="cursor-pointer text-white text-base font-bold font-thicccboi border-[1px] border-solid border-white rounded-lg py-3 px-8 sm:ml-20 mt-10"
          href="https://tradingapp.gitbook.io/tradingapp/"
        >
          Let's begin
        </a>
      </div>
    </section>
  );
};
