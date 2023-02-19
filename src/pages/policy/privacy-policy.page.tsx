import { FC } from "react";

export const PrivacyPolicy: FC = () => {
  return (
    <section className="w-full h-[1000px] pt-40 flex flex-col justify-center items-center">
      <h1 className="text-5xl text-white font-bold font-thicccboi">
        Polityka prywatności
      </h1>
      <div className="h-[300px] w-full max-w-[760px] mt-20 text-xl text-white font-medium font-thicccboi">
        Polityka prywatności TradingApp
        <br />
        <br />
        <em>Data wejścia w życie: Grudzień, 2022 r.</em>
      </div>
    </section>
  );
};
