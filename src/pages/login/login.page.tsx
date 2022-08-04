import { FC } from "react";
import { Link } from "react-router-dom";

export const Login: FC = () => {
  return (
    <section className="w-full h-screen  flex justify-center items-center">
      <div className="flex flex-col w-[500px]">
        <h1 className="text-5xl text-white font-bold font-thicccboi">
          Zaloguj się na konto
        </h1>
        <div className="text-xl text-white font-normal font-thicccboi mt-7">
          Nie masz jeszcze konta?
          <Link
            to="/register"
            className="border-b-2 border-white border-solid ml-2 pb-1"
          >
            Zarejestruj się
          </Link>
        </div>
        <form className="mt-20 gap-8 flex flex-col w-full">
          <input
            type="text"
            name="email"
            className="w-full px-7 rounded-md font-thicccboi text-lg py-4"
            placeholder="E-mail"
          />
          <input
            type="text"
            name="password"
            className="w-full px-7 rounded-md font-thicccboi text-lg py-4"
            placeholder="Password"
          />
          <button
            type="submit"
            className="block w-full px-7 rounded-md font-thicccboi text-lg py-4 bg-gradient-to-r from-red-500 to-blue-500 text-white"
          >
            Zaloguj się
          </button>
        </form>
      </div>
    </section>
  );
};
