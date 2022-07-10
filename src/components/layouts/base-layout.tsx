import { FC } from "react";
import { NavBar } from "../navigations";
import { Outlet } from "react-router-dom";

export const BaseLayout: FC = () => {
  return (
    <div className="bg-[#0B0B0F]">
      <NavBar />
      <main className="mx-36 flex">
        <Outlet />
      </main>
    </div>
  );
};
