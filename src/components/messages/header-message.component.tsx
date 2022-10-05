import { FC } from "react";
import { FiAlertCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

export const HeaderMessage: FC = () => {
  return (
    <div className="w-full h-10 bg-[red] flex items-center text-white gap-4 p-4 font-roboto font-medium">
      <FiAlertCircle className="text-2xl" />
      <p className="m-0 text-base">Nie posiadasz subskrypcji!</p>
      <Link to="/settings/plans" className="text-[#0751D3]">
        Kup subskrypcję
      </Link>
    </div>
  );
};
