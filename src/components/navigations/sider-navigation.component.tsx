import { FC } from "react";
import { Link } from "react-router-dom";

import { Menu, Layout } from "antd";
import {
  IoExit,
  IoGridOutline,
  IoHelpCircleOutline,
  IoOptions,
} from "react-icons/io5";

const { Sider } = Layout;

interface SiderNavigationProps {
  logOut?: () => void;
}

export const SiderNavigation: FC<SiderNavigationProps> = (props) => {
  const menuItemStyle =
    "h-[60px] w-[170px] rounded-xl border-none active:bg-[#0751D3] focus-within:bg-[#0751D3] hover:bg-[#0751D3] after:border-none";
  const menuItemTextStyle =
    "flex items-center gap-4 font-roboto font-normal text-lg active:text-white focus:text-white hover:text-white";

  const menuItemIconStyle =
    "text-2xl hover:text-white active:text-white focus:text-white";

  return (
    <Sider
      {...props}
      className="bg-[#FFFFFF] w-[200px] max-w-[200px] min-w-[200px] relative flex flex-col items-center"
    >
      <Link
        to="/"
        className="h-20 mb-20 flex flex-col items-center justify-center"
      >
        <img alt="logo" src="logo.svg" />
      </Link>
      <Menu
        mode="inline"
        inlineIndent={16}
        className="flex flex-col items-center border-none"
      >
        <Menu.Item className={menuItemStyle} key="/dashboard">
          <Link className={menuItemTextStyle} to="/dashboard">
            <IoGridOutline className={menuItemIconStyle} />
            Dashboard
          </Link>
        </Menu.Item>
        <Menu.Item className={menuItemStyle} key="/settings">
          <Link className={menuItemTextStyle} to="/settings/plans">
            <IoOptions className={menuItemIconStyle} /> Settings
          </Link>
        </Menu.Item>
      </Menu>
      <a
        className="h-[40px] w-[170px] text-sm text-black bg-[#5E6366]/[.2] flex gap-2 absolute bottom-20 items-center justify-center rounded-2xl"
        href="mailto:helpdesktradingapp@gmail.com"
      >
        <IoHelpCircleOutline className="text-xl" />
        Pomoc
      </a>
      <button
        className="h-[60px] w-[170px] text-lg text-[#CC5F5F] flex gap-2 absolute bottom-0 items-center justify-center"
        onClick={props.logOut}
      >
        <IoExit className="text-2xl opacity-60" />
        Logout
      </button>
    </Sider>
  );
};
