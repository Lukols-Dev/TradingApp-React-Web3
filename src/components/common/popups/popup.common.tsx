import { ChangeEvent, FC } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

interface PopupProps {
  value?: string;
  getAccess?: () => void;
  keyDown?: (e: React.KeyboardEvent<HTMLDivElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Popup: FC<PopupProps> = ({
  onChange,
  getAccess,
  keyDown,
  value,
}) => {
  return (
    <div className="w-screen h-screen flex fixed z-10 items-center justify-center top-0 left-0">
      <div className="w-full h-full fixed"></div>
      <div className="bg-white rounded-lg relative p-4 ">
        <p className="text-lg font-normal font-thicccboi mb-2">
          Dostęp tylko dla osób z zamkniętej listy:
        </p>
        <div className="gap-8 flex w-full">
          <input
            type="text"
            className="w-full sm:w-[500px] px-7 rounded-md font-thicccboi text-lg py-4 border-2 border-black"
            placeholder="Kod dostępu"
            value={value}
            onChange={onChange}
            onKeyDown={keyDown}
          />
          <button
            onClick={getAccess}
            type="submit"
            className=" flex justify-center items-center w-[70px] px-7 rounded-md font-thicccboi text-3xl py-4 bg-gradient-to-r from-red-500 to-blue-500 text-white"
          >
            <p className="text-3xl text-white">
              <AiOutlineArrowRight />
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};
