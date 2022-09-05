import { ChangeEvent, FC, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext, UserAccount } from "../../context/auth.context";

export const Login: FC = () => {
  const { logIn } = useContext(AuthContext) as UserAccount;
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async () => {
    try {
      await logIn(email, password);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
    setEmail("");
    setPassword("");
  };

  return (
    <section className="w-full h-screen  flex justify-center items-center">
      <div className="flex flex-col w-[500px]">
        <h1 className="text-5xl text-white font-bold font-thicccboi">
          Zaloguj się na konto
        </h1>
        <div className="blur-[2px] text-xl text-white font-normal font-thicccboi mt-7">
          Nie masz jeszcze konta?
          <a
            href="/login"
            className="border-b-2 border-white border-solid ml-2 pb-1"
          >
            Zarejestruj się
          </a>
        </div>
        <div className="mt-20 gap-8 flex flex-col w-full">
          <input
            type="text"
            name="email"
            className="w-full px-7 rounded-md font-thicccboi text-lg py-4"
            placeholder="E-mail"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <input
            type="password"
            name="password"
            className="w-full px-7 rounded-md font-thicccboi text-lg py-4"
            placeholder="Hasło"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
          <button
            type="button"
            className="w-full px-7 rounded-md font-thicccboi text-lg py-4 bg-gradient-to-r from-red-500 to-blue-500 text-white"
            onClick={handleLogin}
          >
            Zaloguj się
          </button>
        </div>
      </div>
    </section>
  );
};
