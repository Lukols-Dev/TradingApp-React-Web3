import { FC } from "react";
import { Outlet } from "react-router-dom";

export const SettingLayout: FC = () => {
  return (
    <div className="h-full ml-[20px] mr-[50px]">
      <Outlet />
    </div>
  );
};
