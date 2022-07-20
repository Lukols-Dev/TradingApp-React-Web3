import { FC } from "react";
import { AiOutlineCheck } from "react-icons/ai";

export const Price: FC = () => {
  return (
    <div className="w-full h-[900px] flex justify-center items-center gap-20">
      <div className="w-[400px] h-[500px] bg-white rounded-lg flex flex-col items-center">
        <h2 className="text-4xl font-medium font-thicccboi mt-10">
          Individual
        </h2>
        <p className="text-lg text-[#898CA9] font-normal font-thicccboi mt-10">
          One price, zero restrictions.
        </p>
        <ul className="flex flex-col mt-3 gap-2">
          <li className="flex items-center gap-2 text-sm text-[#898CA9] font-normal font-thicccboi">
            <AiOutlineCheck /> Trading Bot
          </li>
          <li className="flex items-center gap-2 text-sm text-[#898CA9] font-normal font-thicccboi">
            <AiOutlineCheck /> Closed Community
          </li>
          <li className="flex items-center gap-2 text-sm text-[#898CA9] font-normal font-thicccboi">
            <AiOutlineCheck /> 24h/7 Support
          </li>
        </ul>
        <div className="flex relative mt-0">
          <p className="text-8xl text-black font-thicccboi mt-10">30</p>
          <span className="absolute top-[40px] left-[-20px] text-2xl text-black font-thicccboi">
            $
          </span>
          <span className="absolute bottom-[10px] right-[-40px] text-2xl text-black font-thicccboi">
            /mo
          </span>
        </div>
        <button className="mt-10 rounded-lg bg-[blue] px-8 py-3 text-white font-thicccboi font-medium">
          Choose Plan
        </button>
      </div>
    </div>
  );
};
