import { FC } from "react";
import { Link } from "react-router-dom";

export const Footer: FC = () => {
  return (
    <div className="w-full h-[50px] flex flex-col">
      <div className="mx-10 gap-4 sm:mx-36 h-12 sm:h-10 items-center justify-between flex flex-col-reverse sm:flex-row sm:border-white/[.2] sm:border-t">
        <p className="text-white/[.2] text-sm font-medium font-thicccboi">
          © 2023 TradingApp
        </p>
        <div className=" flex gap-6">
          <Link
            to="/privacy-policy"
            className="text-white/[.2] text-sm font-medium font-thicccboi mr-4 sm:mr-0 z-10"
          >
            Polityka prywatności
          </Link>
          <p className="text-white/[.2] text-sm font-medium font-thicccboi">
            Regulamin
          </p>
        </div>
      </div>
    </div>
  );
};
