import { FC } from "react";
import { Link } from "react-router-dom";

export const NavBar: FC = () => {
  return (
    <header className="w-full h-20 flex bg-[#0B0B0F]">
      <div className="w-full h-20 mx-36 flex items-center justify-between">
        <Link to="/" className="text-white text-2xl font-bold font-inter">
          TradingApp
        </Link>
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

        <div className="flex gap-5">
          <p className=" blur-[2px] cursor-pointer text-white text-base font-medium font-roboto border-[1px] border-solid border-white rounded-lg py-2 px-3">
            Sign in
          </p>
          <p className=" blur-[2px] cursor-pointer text-white text-base font-medium font-roboto rounded-lg py-2 px-3 bg-gradient-to-r from-red-500 to-blue-500">
            Sign up
          </p>
        </div>
      </div>
    </header>
  );
};
