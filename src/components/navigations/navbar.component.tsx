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
        <div className="mx-8 w-full h-20 xl:mx-36 flex items-center justify-between ">
          <Link
            to="/"
            className="text-white text-2xl font-bold font-inter flex gap-2 items-end justify-center"
          >
            <svg
              width="44"
              height="43"
              viewBox="0 0 24 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="11" y="15" width="3" height="8" rx="1.5" fill="white" />
              <rect x="16" y="7" width="3" height="16" rx="1.5" fill="white" />
              <rect x="21" y="11" width="3" height="12" rx="1.5" fill="white" />
              <path
                d="M10.8266 6.16318L7.72761 2.84023C7.61511 2.71992 7.38484 2.71992 7.27321 2.84023L4.17333 6.16318C4.1657 6.17136 4.16113 6.18101 4.16012 6.19108C4.15912 6.20115 4.16172 6.21124 4.16763 6.22023C4.17355 6.22922 4.18255 6.23676 4.19364 6.24201C4.20473 6.24727 4.21747 6.25003 4.23045 6.25H4.88963C4.93446 6.25 4.97664 6.23291 5.00301 6.20488L7.49997 3.52793L9.99693 6.20488C10.0233 6.23291 10.0655 6.25 10.1103 6.25H10.7695C10.8266 6.25 10.86 6.19941 10.8266 6.16318Z"
                fill="white"
              />
              <path
                d="M10.8266 8.83682L7.72761 12.1598C7.61511 12.2801 7.38484 12.2801 7.27321 12.1598L4.17333 8.83682C4.1657 8.82864 4.16113 8.81899 4.16012 8.80892C4.15912 8.79885 4.16172 8.78876 4.16763 8.77977C4.17355 8.77078 4.18255 8.76324 4.19364 8.75799C4.20473 8.75273 4.21747 8.74997 4.23045 8.75H4.88963C4.93446 8.75 4.97664 8.76709 5.00301 8.79512L7.49997 11.4721L9.99693 8.79512C10.0233 8.76709 10.0655 8.75 10.1103 8.75H10.7695C10.8266 8.75 10.86 8.80059 10.8266 8.83682Z"
                fill="white"
              />
              <circle cx="7.5" cy="7.5" r="7" stroke="white" />
            </svg>
            TradingApp
          </Link>
          <nav className="hidden xl:flex gap-8	">
            <a
              className="text-white text-base font-medium font-roboto"
              href="https://tradingapp.gitbook.io/tradingapp/"
            >
              Learn
            </a>
            <Link
              className="blur-[2px] text-white text-base font-medium font-roboto"
              to="/"
            >
              Price
            </Link>
            <Link
              className=" blur-[2px] text-white text-base font-medium font-roboto"
              to="/"
            >
              Team
            </Link>
            <a
              className=" text-white text-base font-medium font-roboto"
              href="https://discord.gg/QtgsbeCf"
            >
              Discord
            </a>
          </nav>
          <div className="hidden xl:flex gap-5">
            <p className=" blur-[2px] cursor-pointer text-white text-base font-medium font-roboto border-[1px] border-solid border-white rounded-lg py-2 px-3">
              Sign in
            </p>
            <p className=" blur-[2px] cursor-pointer text-white text-base font-medium font-roboto rounded-lg py-2 px-3 bg-gradient-to-r from-red-500 to-blue-500">
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
              className="w-full h-[40px] text-white text-base font-medium font-roboto"
              href="https://tradingapp.gitbook.io/tradingapp/"
            >
              Learn
            </a>
            <Link
              className="w-full h-[40px] blur-[2px] text-white text-base font-medium font-roboto"
              to="/"
            >
              Price
            </Link>
            <Link
              className="w-full h-[40px] blur-[2px] text-white text-base font-medium font-roboto"
              to="/"
            >
              Team
            </Link>
            <a
              className="w-full h-[40px] text-white text-base font-medium font-roboto"
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
