import { FC } from "react";

import galaxyLogin from "../../../assets/phones/galaxy-login.svg";
import galaxySignal from "../../../assets/phones/galaxy-signal.svg";
import galaxyBuy from "../../../assets/phones/galaxy-buy.svg";
import galaxyMonitoring from "../../../assets/phones/galaxy-monitoring.svg";

export const AboutAppSection: FC = () => {
  return (
    <section className="flex flex-col w-full h-[2850px] sm:h-[3800px] lg:h-[2500px] gap-x-12 items-center z-10 sm:mt-40 lg:mt-0">
      <h1 className="text-2xl w-[300px] sm:text-5xl sm:w-[500px] xl:text-6xl xl:w-[650px] text-white font-bold font-thicccboi mt-32 text-center">
        Jak zacząć korzystać z aplikacji?
      </h1>
      <p className="text-[#898CA9] text-lg sm:text-xl lg:text-2xl font-normal font-thicccbo w-[300px] sm:w-[600px] mt-7 sm:text-center">
        Zapoznaj się z materiałami szkoleniowymi. <br /> Materiały szkoleniowe
        zostały przygotowane tak, aby użytkownik dokładnie poznał aplikację i
        potrafił ją odpowiednio skonfigurować.
      </p>
      <div className="flex flex-col gap-8 mt-[50px] sm:mt-[50px] sm:flex-col lg:mt-[125px] lg:flex-row-reverse">
        <div className="flex flex-col mt-10 sm:mt-24">
          <h2 className="text-white text-xl sm:text-2xl font-black font-thicccbo">
            1. Zarejestruj konto w aplikacji
          </h2>
          <p className="text-[#898CA9] text-lg sm:text-lg font-normal font-thicccbo w-[300px] sm:w-[500px] mt-7">
            Pobierz aplikację, zarejestruj konto w naszym systemie, a następnie
            za pomocą kluczy API połącz je z największą giełdą kryptowalutową -
            Binance.
          </p>
        </div>
        <img
          src={galaxyLogin}
          className="h-auto w-[500px] z-20 relative left-20"
          alt="phone"
        />
      </div>
      <div className="flex flex-col-reverse sm:flex-col-reverse lg:flex-row-reverse gap-8">
        <img
          src={galaxySignal}
          className="h-auto w-[500px] z-20 relative left-20"
          alt="phone"
        />
        <div className="flex flex-col sm:mt-24">
          <h2 className="text-white text-xl sm:text-2xl font-black font-thicccbo relative left-0 lg:left-40">
            2. Dostosuj ustawienia do swoich potrzeb
          </h2>
          <p className="text-[#898CA9] text-lg sm:text-lg font-normal font-thicccbo w-[300px] sm:w-[500px] mt-7 relative left-0 lg:left-40">
            Ustaw m.in. wartość spodziewanego zysku z rozgrywanej pozycji,
            procent inwestycji jaki może być przeznaczony na realizację
            zlecenia, czy też ilość obsługiwanych sygnałów w danym czasie.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-8 sm:mt-[50px] sm:flex-col lg:flex-row-reverse">
        <div className="flex flex-col mt-10 sm:mt-24">
          <h2 className="text-white text-xl sm:text-2xl font-black font-thicccbo">
            3. Automatyczne rozgrywanie pozycji
          </h2>
          <p className="text-[#898CA9] text-lg sm:text-lg font-normal font-thicccbo w-[300px] sm:w-[500px] mt-7">
            Po odpowiednim dostosowaniu ustawień. Uruchom możliwość
            automatycznego handlu walutami. Sztuczna inteligencja zaczynie
            przeprowadzać zaawansowane analizy danych giełdowych.
          </p>
        </div>
        <img
          src={galaxyBuy}
          className="h-auto w-[500px] z-20 relative left-20"
          alt="phone"
        />
      </div>
      <div className="flex flex-col-reverse sm:flex-col-reverse lg:flex-row-reverse gap-8">
        <img
          src={galaxyMonitoring}
          className="h-auto w-[500px] z-20 relative left-20"
          alt="phone"
        />
        <div className="flex flex-col sm:mt-24">
          <h2 className="text-white text-xl sm:text-2xl font-black font-thicccbo relative left-0 lg:left-40">
            4. Monitoring pozycji
          </h2>
          <p className="text-[#898CA9] text-lg sm:text-lg font-normal font-thicccbo w-[300px] sm:w-[500px] mt-7 relative left-0 lg:left-40">
            Dane zlecenie będzie stale monitorowane przez aplikację, celem
            odpowiedniego zamknięcia pozycji. Jeśli uznasz, że Twój zysk jest
            wystarczający - z poziomu aplikacji masz możliwość wcześniejszego
            zamknięcia zlecenia.
          </p>
        </div>
      </div>
    </section>
  );
};
