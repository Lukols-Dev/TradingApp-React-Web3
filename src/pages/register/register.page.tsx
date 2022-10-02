import { Checkbox } from "antd";
import { CheckboxChangeEvent } from "antd/lib/checkbox";
import { ChangeEvent, FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuthService } from "../../services/user-authentication.service";

export const Register: FC = () => {
  const navigate = useNavigate();

  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [checkTerms, setCheckTerms] = useState<boolean>(false);
  const [checkNewsletter, setCheckNewsletter] = useState<boolean>(false);

  const handleRegister = async () => {
    try {
      await UserAuthService.registerAccount(
        email,
        password,
        name,
        surname,
        checkTerms,
        checkNewsletter
      );
      navigate(`/register/complete?email=${email}`);
    } catch (error) {
      console.log(error);
    }
    setName("");
    setSurname("");
    setEmail("");
    setPassword("");
    setCheckTerms(false);
    setCheckNewsletter(false);
  };

  return (
    <section className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col w-[500px]">
        <h1 className="text-5xl text-white font-bold font-thicccboi">
          Rejestracja
        </h1>
        <div className="text-xl text-white font-normal font-thicccboi mt-7">
          Masz już konto?
          <Link
            to="/login"
            className="border-b-2 border-white border-solid ml-2 pb-1"
          >
            Zaloguj się
          </Link>
        </div>
        <div className="mt-20 gap-8 flex flex-col w-full">
          <input
            type="text"
            name="name"
            className="w-full px-7 rounded-md font-thicccboi text-lg py-4"
            placeholder="Imię"
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />
          <input
            type="text"
            name="surname"
            className="w-full px-7 rounded-md font-thicccboi text-lg py-4"
            placeholder="Nazwisko"
            value={surname}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSurname(e.target.value)
            }
          />
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
          <div className="w-full flex flex-col gap-2">
            <Checkbox
              className="text-white m-0"
              checked={checkTerms}
              onChange={(e: CheckboxChangeEvent) =>
                setCheckTerms(e.target.checked)
              }
            >
              *I have read and accepted the Terms of Service and the Privacy
              Policy.
            </Checkbox>
            <Checkbox
              className="text-white m-0"
              checked={checkNewsletter}
              onChange={(e: CheckboxChangeEvent) =>
                setCheckNewsletter(e.target.checked)
              }
            >
              Newsletter - I consent to sending me marketing messages in
              accordance with the Terms of Service
            </Checkbox>
          </div>
          <button
            type="button"
            className="w-full px-7 rounded-md font-thicccboi text-lg py-4 bg-gradient-to-r from-red-500 to-blue-500 text-white"
            onClick={handleRegister}
          >
            Zarejestruj się
          </button>
        </div>
      </div>
    </section>
  );
};
