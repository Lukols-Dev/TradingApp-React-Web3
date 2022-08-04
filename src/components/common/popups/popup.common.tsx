import { FC } from "react";
import { AiOutlineArrowRight, AiOutlineClose } from "react-icons/ai";

interface PopupProps {
  close?: () => void;
}

export const Popup: FC<PopupProps> = ({ close }) => {
  return (
    <div className="w-screen h-screen flex fixed z-20 items-center justify-center top-0 left-0">
      <div
        className="bg-gray-500/[.4] w-full h-full fixed"
        onClick={close}
      ></div>
      <div className="bg-white rounded-lg relative p-4 ">
        <div className="w-full h-10">
          <button className="absolute right-2 top-2 text-3xl" onClick={close}>
            <AiOutlineClose />
          </button>
        </div>

        <p className="text-lg font-normal font-thicccboi mb-2">
          Dostęp tylko dla osób z zamkniętej listy:
        </p>
        <form className="gap-8 flex w-full">
          <input
            type="text"
            name="password"
            className="w-[500px] px-7 rounded-md font-thicccboi text-lg py-4 border-2 border-black"
            placeholder="Kod dostępu"
          />
          <button
            type="submit"
            className=" flex justify-center items-center w-[70px] px-7 rounded-md font-thicccboi text-3xl py-4 bg-gradient-to-r from-red-500 to-blue-500 text-white"
          >
            <p className="text-3xl text-white">
              <AiOutlineArrowRight />
            </p>
          </button>
        </form>
      </div>
    </div>
  );
};
