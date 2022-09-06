import { FC, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { AuthContext, UserAccount } from "../../context/auth.context";

export const NavBar: FC = () => {
  const { user } = useContext(AuthContext) as UserAccount;
  const [hiddenMenu, setHiddenMenu] = useState<boolean>(false);

  const showMobileMenu = () => {
    setHiddenMenu((prev) => !prev);
  };

  return (
    <>
      <header className="w-full h-20 flex bg-[#0B0B0F] fixed z-30">
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
              Materiały
            </a>
            <Link
              to="/price"
              className="text-white text-xl font-medium font-thicccboi"
            >
              Cennik
            </Link>
            <Link
              className=" blur-[2px] text-white text-xl font-medium font-thicccboi"
              to="/"
            >
              Zespół
            </Link>
            <a
              className=" text-white text-xl  font-medium font-thicccboi"
              href="https://discord.gg/eZKFX3skvh"
            >
              Discord
            </a>
          </nav>
          <div className="hidden xl:flex gap-5">
            {user ? (
              <Link
                to="/dashboard"
                className="cursor-pointer text-white text-xl font-medium font-thicccboi rounded-lg py-2 px-3 bg-gradient-to-r from-red-500 to-blue-500"
              >
                <FaUser />
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="cursor-pointer text-white text-base  font-medium font-thicccboi border-[1px] border-solid border-white rounded-lg py-2 px-3"
                >
                  Zaloguj się
                </Link>
                <p className="blur-[2px] cursor-pointer text-white text-base  font-medium font-thicccboi rounded-lg py-2 px-3 bg-gradient-to-r from-red-500 to-blue-500">
                  Zarejestruj się
                </p>
              </>
            )}
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
          <nav className="flex flex-col w-full h-full ml-4 mt-4">
            {user && (
              <Link
                to="/dashboard"
                className=" mb-10 h-[40px] w-[40px] text-white text-lg rounded-lg py-2 px-3 bg-gradient-to-r from-red-500 to-blue-500 flex items-center"
              >
                <FaUser />
              </Link>
            )}
            <a
              className="w-full h-[40px] text-white text-xl  font-medium font-thicccboi"
              href="https://tradingapp.gitbook.io/tradingapp/"
            >
              Materiały
            </a>
            <Link
              to="/price"
              className="w-full h-[40px] text-white text-xl font-medium font-thicccboi"
            >
              Cennik
            </Link>
            <Link
              className="w-full h-[40px] blur-[2px] text-white text-xl font-medium font-thicccboi"
              to="/"
            >
              Zespół
            </Link>
            <a
              className="w-full h-[40px] text-white text-xl font-medium font-thicccboi"
              href="https://discord.gg/eZKFX3skvh"
            >
              Discord
            </a>
            {!user && (
              <>
                <Link
                  to="/login"
                  className=" w-full h-[40px] text-white text-xl font-medium font-thicccboi"
                >
                  Zaloguj się
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </>
  );
};
