import { FC } from "react";

import { BiBrain } from "react-icons/bi";
import { GoSettings } from "react-icons/go";
import { IoAnalyticsOutline } from "react-icons/io5";

export const InfoSection: FC = () => {
  return (
    <section className="w-full h-[800px] flex flex-col gap-y-12 items-center justify-center sm:flex-col sm:h-[1300px] sm:gap-y-12 lg:flex-row lg:h-[500px] lg:gap-x-12 lg:mt-10">
      <div className="w-[340px] h-[300px] flex flex-col items-center justify-center bg-[#1A1B23] rounded-xl z-10 mb-8 sm:mb-0 sm:w-[440px] sm:h-[250px]">
        <span className="w-[50px] h-[50px] text-3xl text-white rounded-[50%] mb-4 flex items-center justify-center bg-gradient-to-r from-red-500 to-blue-500 sm:w-[60px] sm:h-[60px] sm:text-4xl">
          <BiBrain />
        </span>
        <p className="text-white text-lg font-bold font-thicccboi sm:text-xl">
          Sztuczna inteligencja
        </p>
        <p className="text-white/[.6] text-sm text-center font-normal font-thicccboi mt-3.5 w-[300px] sm:text-base">
          Inwestowanie może wyglądać na skomplikowane, ale nie musi takie być.
          Oszczędzaj czas i inwestuj z mocą AI.
        </p>
      </div>
      <div className="w-[340px] h-[300px] flex flex-col items-center justify-center bg-[#1A1B23] rounded-xl z-10 mb-8 sm:mb-0 sm:w-[440px] sm:h-[250px]">
        <span className="w-[50px] h-[50px] text-3xl text-white rounded-[50%] mb-4 flex items-center justify-center bg-gradient-to-r from-red-500 to-blue-500 sm:w-[60px] sm:h-[60px] sm:text-4xl">
          <GoSettings />
        </span>
        <p className="text-white text-lg font-bold font-thicccboi sm:text-xl">
          Pełna kontrola
        </p>
        <p className="text-white/[.6] text-sm text-center font-normal font-thicccboi mt-3.5 w-[300px] sm:text-base">
          Masz pełną kontrolę.
          <br />
          Możesz dostosować narzędzie TradingApp idealnie do swoich potrzeb.
        </p>
      </div>
      <div className="w-[340px] h-[300px] flex flex-col items-center justify-center bg-[#1A1B23] rounded-xl z-10 sm:w-[440px] sm:h-[250px]">
        <span className="w-[50px] h-[50px] text-3xl text-white rounded-[50%] mb-4 flex items-center justify-center bg-gradient-to-r from-red-500 to-blue-500 sm:w-[60px] sm:h-[60px] sm:text-4xl">
          <IoAnalyticsOutline />
        </span>
        <p className="text-white text-lg font-bold font-thicccboi sm:text-xl">
          Zaawansowana analityka
        </p>
        <p className="text-white/[.6] text-sm text-center font-normal font-thicccboi mt-3.5 w-[300px] sm:text-base">
          Sygnały bazują na 11 wskaźnikach.
          <br />
          Cena zakupu oraz sprzedaży dobrana jest na podstawie poziomów
          Fibonnacciego.
        </p>
      </div>
    </section>
  );
};
