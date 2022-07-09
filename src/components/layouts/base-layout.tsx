import { FC } from "react";
import { Link } from "react-router-dom";

export const BaseLayout: FC = () => {
  return (
    <div className="w-screen h-screen flex flex-col bg-[#0B0B0F]">
      <header className="w-full h-20 bg-orange-800 flex">
        <div className="w-full h-20 mx-36 flex items-center justify-between">
          <p className="text-white text-2xl font-bold font-inter">TradingApp</p>
          <nav className="flex gap-8	">
            <a
              className="text-white text-base font-medium font-roboto"
              href="https://tradingapp.gitbook.io/tradingapp/"
            >
              Learn
            </a>
            <Link
              className="text-white text-base font-medium font-roboto"
              to="/price"
            >
              Price
            </Link>
            <Link
              className="text-white text-base font-medium font-roboto"
              to="/team"
            >
              Team
            </Link>
            <Link
              className="text-white text-base font-medium font-roboto"
              to="/discord"
            >
              Discord
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};
