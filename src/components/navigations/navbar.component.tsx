import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export const NavBar: FC = () => {
  const [hiddenMenu, setHiddenMenu] = useState<boolean>(false);

  const showMobileMenu = () => {
    setHiddenMenu((prev) => !prev);
  };

  return (
    <>
      <header className="w-full h-20 flex bg-[#0B0B0F] fixed z-20">
        <div className="mx-8 w-full h-20 xl:mx-36 flex items-center justify-between">
          <Link
            to="/"
            className="text-white text-2xl font-normal font-jura flex gap-2 items-end justify-center"
          >
            <img alt="logo" src="logo.svg" />
            TradingApp
          </Link>
          <nav className="hidden xl:flex gap-8	">
            <a
              className="text-white text-xl font-medium font-thicccboi"
              href="https://tradingapp.gitbook.io/tradingapp/"
            >
              Learn
            </a>
            <Link
              className="blur-[2px] text-white text-xl  font-medium font-thicccboi"
              to="/"
            >
              Price
            </Link>
            <Link
              className=" blur-[2px] text-white text-xl font-medium font-thicccboi"
              to="/"
            >
              Team
            </Link>
            <a
              className=" text-white text-xl  font-medium font-thicccboi"
              href="https://discord.gg/QtgsbeCf"
            >
              Discord
            </a>
          </nav>
          <div className="hidden xl:flex gap-5">
            <p className=" blur-[2px] cursor-pointer text-white text-base  font-medium font-thicccboi border-[1px] border-solid border-white rounded-lg py-2 px-3">
              Sign in
            </p>
            <p className=" blur-[2px] cursor-pointer text-white text-base  font-medium font-thicccboi rounded-lg py-2 px-3 bg-gradient-to-r from-red-500 to-blue-500">
              Sign up
            </p>
          </div>
          <p
            className="cursor-pointer text-white text-2xl xl:hidden"
            onClick={showMobileMenu}
          >
            {!hiddenMenu ? <AiOutlineMenu /> : <AiOutlineClose />}
          </p>
        </div>
      </header>
      {hiddenMenu && (
        <div className="flex flex-col w-[150px] h-screen fixed top-20 right-0 z-20 bg-[#0B0B0F] xl:hidden">
          <nav className="flex flex-col w-full h-full items-center ml-4 mt-4">
            <a
              className="w-full h-[40px] text-white text-xl  font-medium font-thicccboi"
              href="https://tradingapp.gitbook.io/tradingapp/"
            >
              Learn
            </a>
            <Link
              className="w-full h-[40px] blur-[2px] text-white text-xl font-medium font-thicccboi"
              to="/"
            >
              Price
            </Link>
            <Link
              className="w-full h-[40px] blur-[2px] text-white text-xl font-medium font-thicccboi"
              to="/"
            >
              Team
            </Link>
            <a
              className="w-full h-[40px] text-white text-xl font-medium font-thicccboi"
              href="https://discord.gg/QtgsbeCf"
            >
              Discord
            </a>
          </nav>
        </div>
      )}
    </>
  );
};
