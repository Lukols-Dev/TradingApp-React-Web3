import { FC } from "react";
import { Link, Outlet } from "react-router-dom";

export const LoginRegisterLayout: FC = () => {
  return (
    <div className="bg-[#0B0B0F] relative overflow-hidden">
      <header className="w-full h-20 flex bg-[#0B0B0F] fixed z-20">
        <div className="mx-8 w-full h-20 xl:mx-36 flex items-center justify-between">
          <Link
            to="/"
            className="text-white text-2xl font-normal font-jura flex gap-2 items-end justify-center"
          >
            <img alt="logo" src="logo.svg" />
            TradingApp
          </Link>
        </div>
      </header>
      <main className="mx-36 flex">
        <Outlet />
      </main>
    </div>
  );
};
