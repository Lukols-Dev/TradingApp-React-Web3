import { FC } from "react";

import galaxyLogin from "../../../assets/phones/galaxy-login.svg";
import galaxySignal from "../../../assets/phones/galaxy-signal.svg";
import galaxyBuy from "../../../assets/phones/galaxy-buy.svg";
import galaxyCoins from "../../../assets/phones/galaxy-coins.svg";

export const AboutAppSection: FC = () => {
  return (
    <section className="flex flex-col w-full h-[2500px] sm:h-[2300px] gap-x-12 items-center z-10">
      <h1 className="text-4xl w-[340px] sm:text-5xl sm:w-[500px] xl:text-6xl xl:w-[780px] text-white font-bold font-thicccboi mt-32  text-center ">
        Jak zacząć trading z TradingApp?
      </h1>
      <div className="flex gap-[100px] justify-between mt-[50px] sm:mt-[125px] flex-col-reverse sm:flex-row">
        <img
          src={galaxyLogin}
          className="h-auto w-[500px] z-20 mt-[20px] sm:mt-0"
          alt="phone"
        />
        <div className="flex flex-col mt-24">
          <h2 className="text-white text-xl sm:text-4xl font-black font-thicccbo">
            1. Zaloguj się/Pobierz aplikację
          </h2>
          <p className="text-[#898CA9] text-lg sm:text-2xl font-normal font-thicccbo w-[300px] sm:w-[600px] mt-7">
            Pobierz aplikację, załóż konto i połącz je z Binance exchange
            poprzez wprowadzenie odpowiednich kluczy.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse sm:flex-row-reverse gap-[100px] justify-between">
        <img
          src={galaxySignal}
          className="h-auto w-[500px] z-20 mt-[20px] sm:mt-0"
          alt="phone"
        />
        <div className="flex flex-col sm:mt-24">
          <h2 className="text-white text-xl sm:text-4xl font-black font-thicccbo">
            2. Poczekaj na sygnały
          </h2>
          <p className="text-[#898CA9] text-lg sm:text-2xl font-normal font-thicccbo w-[300px] sm:w-[600px] mt-7">
            Sztuczna inteligencja zaczyna przeprowadzać zaawansowane analizy
            danych giełdowych danych rynkowych, aby wyświetlić najlepsze
            sygnały.
          </p>
        </div>
      </div>
      <div className="flex gap-[100px] justify-between flex-col-reverse sm:flex-row">
        <img
          src={galaxyBuy}
          className="h-auto w-[500px] z-20 mt-[20px] sm:mt-0"
          alt="phone"
        />
        <div className="flex flex-col sm:mt-24">
          <h2 className="text-white text-xl sm:text-4xl font-black font-thicccbo">
            3. Kup
          </h2>
          <p className="text-[#898CA9] text-lg sm:text-2xl font-normal font-thicccbo w-[300px] sm:w-[600px] mt-7">
            Sztuczna inteligencja będzie czekać na idealny moment do zakupu i
            zaprezentować efekty tej gry.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse sm:flex-row-reverse sm:gap-[270px] items-center justify-between sm:bottom-[200px] relative">
        <img
          src={galaxyCoins}
          className="h-auto w-[200px] sm:w-[270px] z-20"
          alt="phone"
        />
        <div className="hidden xl:inline absolute right-[0px] top-[200px] bg-[#FCD434]/[.2] blur-[100px] w-[300px] h-[300px] z-10"></div>
        <div className="flex flex-col sm:mt-24">
          <h2 className="text-white text-xl sm:text-4xl font-black font-thicccbo">
            4. Sprzedaj
          </h2>
          <p className="text-[#898CA9] text-lg sm:text-2xl font-normal font-thicccbo w-[300px] sm:w-[600px] mt-7">
            Sprzedaż zautomatyzowana, a może ręczna. Ty decydujesz, jakiego
            rodzaju zysku oczekujesz.
          </p>
        </div>
      </div>
    </section>
  );
};
