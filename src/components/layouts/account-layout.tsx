import { FC, ReactElement, useContext, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Layout } from "antd";
import { Avatar } from "antd";
import { SiderNavigation } from "../navigations/sider-navigation.component";
import { IoChevronDownOutline } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { AuthContext, UserAccount } from "../../context/auth.context";
import { HeaderMessage } from "../messages/header-message.component";
import { UserDataService } from "../../services/user-data.service";
import { UserSubscriptionService } from "../../services/user-subscription.service";

const { Header, Content } = Layout;

export const UserAccountLayout: FC = () => {
  const { pathname } = useLocation();
  const { user, logOut } = useContext(AuthContext) as UserAccount;
  const [headerNav, setHeaderNav] = useState<ReactElement | null>(null);
  const [subscriptionStatus, setSubscriptionStatus] = useState<
    boolean | undefined
  >();

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
    }
  }, [pathname]);

  useEffect(() => {
    if (user) {
      (async () => {
        const respUserData = await UserDataService.getUserDataID(user.uid);
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

  return (
    <Layout>
      <SiderNavigation logOut={logOut} />
      <Layout className="bg-[#EEF0FA] w-screen h-screen overflow-hidden">
        {subscriptionStatus && <HeaderMessage />}
        <Header className="h-[60px] pl-[20px] bg-transparent flex items-center justify-between ">
          {headerNav !== null ? headerNav : ""}
          <div className="px-2 gap-4 bg-white h-[40px] min-w-fit rounded-lg flex items-center justify-between">
            <IoChevronDownOutline />
            <p className="font-roboto font-normal text-sm max-w-[300px] flex m-0 truncate">
              Łukasz Olszewski
            </p>
            <Avatar
              className="flex items-center justify-center rounded-lg"
              shape="square"
              size="small"
              icon={<FaUserAlt />}
            />
          </div>
        </Header>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
