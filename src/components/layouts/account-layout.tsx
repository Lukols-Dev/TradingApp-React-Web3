import { FC, ReactElement, useContext, useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Badge, Dropdown, Layout, Menu } from "antd";
import { Avatar } from "antd";
import { SiderNavigation } from "../navigations/sider-navigation.component";
// import { IoChevronDownOutline } from "react-icons/io5";
import { IoMdHelpCircle } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { AuthContext, UserAccount } from "../../context/auth.context";
import { HeaderMessage } from "../messages/header-message.component";
import { UserDataService } from "../../services/user-data.service";
import { UserSubscriptionService } from "../../services/user-subscription.service";
import { UserName } from "../../types/user.types";
import { IoNotificationsSharp } from "react-icons/io5";

const { Header, Content } = Layout;

export const UserAccountLayout: FC = () => {
  const { pathname } = useLocation();
  const { user, logOut } = useContext(AuthContext) as UserAccount;
  const [headerNav, setHeaderNav] = useState<ReactElement | null>(null);
  const [subscriptionStatus, setSubscriptionStatus] = useState<
    boolean | undefined
  >();
  const [userName, setUserName] = useState<UserName>();

  useEffect(() => {
    switch (pathname) {
      case "/dashboard":
        setHeaderNav(
          <h1 className="font-roboto font-medium text-2xl m-0">Dashboard</h1>
        );
        break;
      case "/settings/plans":
        setHeaderNav(
          <h1 className="font-roboto font-medium text-2xl m-0">Subscription</h1>
        );
        break;
      case "/learning":
        setHeaderNav(
          <h1 className="font-roboto font-medium text-2xl m-0">Learning</h1>
        );
        break;
      case "/profile":
        setHeaderNav(
          <h1 className="font-roboto font-medium text-2xl m-0">Profile</h1>
        );
        break;
    }
  }, [pathname]);

  useEffect(() => {
    if (user) {
      (async () => {
        const respUserData = await UserDataService.getUserDataID(user.uid);
        setUserName(respUserData);
        if (respUserData.subscriptionId) {
          const resSubData = await UserSubscriptionService.getSubscriptionID(
            respUserData.subscriptionID
          );

          switch (resSubData.status) {
            case "Active":
              setSubscriptionStatus(true);
              break;
            case "Disactive":
              setSubscriptionStatus(false);
              break;
            case undefined:
              setSubscriptionStatus(false);
              break;
          }
        }
      })();
    }
  }, [user]);

  if (user && !userName) return null;

  return (
    <Layout>
      <SiderNavigation logOut={logOut} />
      <Layout className="bg-[#EEF0FA] w-screen h-screen overflow-hidden">
        {subscriptionStatus && <HeaderMessage />}
        <Header className="h-[60px] pl-[20px] bg-transparent flex items-center justify-between">
          {headerNav !== null ? headerNav : ""}
          <div className="flex gap-4 items-center">
            <Link to="/profile">
              <div
                className="px-2 gap-4 bg-white h-[40px] min-w-fit rounded-lg flex items-center justify-between"
                title="Profil"
              >
                {/* <IoChevronDownOutline /> */}
                <p className="font-roboto font-normal text-sm max-w-[300px] flex m-0 truncate text-black">
                  {userName?.name + " " + userName?.surname}
                </p>
                <Avatar
                  className="flex items-center justify-center rounded-md "
                  shape="square"
                  size="small"
                  icon={<FaUserAlt />}
                />
              </div>
            </Link>
            <a href="mailto:helpdesktradingapp@gmail.com" title="Pomoc">
              <div className=" bg-white w-[40px] h-[40px] min-w-fit rounded-lg flex items-center justify-center">
                <IoMdHelpCircle className="text-3xl text-[#0751D3]" />
              </div>
            </a>
            <div
              className="bg-white w-[40px] h-[40px] min-w-fit rounded-lg flex items-center justify-center cursor-pointer"
              title="Powiadomienia"
            >
              <Dropdown overlay={menu}>
                <Badge count={4} size="default">
                  <IoNotificationsSharp className="text-3xl text-[#0751D3]" />
                </Badge>
              </Dropdown>
            </div>
          </div>
        </Header>
        <Content className="overflow-auto">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

const menu = (
  <Menu
    items={[
      {
        key: "1",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            1st menu item
          </a>
        ),
      },
      {
        key: "2",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            2nd menu item (disabled)
          </a>
        ),

        disabled: true,
      },
      {
        key: "3",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.luohanacademy.com"
          >
            3rd menu item (disabled)
          </a>
        ),
        disabled: true,
      },
      {
        key: "4",
        danger: true,
        label: "a danger item",
      },
    ]}
  />
);
