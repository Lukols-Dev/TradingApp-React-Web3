import { FC, useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext, UserAccount } from "../context/auth.context";

export const PrivateRoute: FC = () => {
  const { user } = useContext(AuthContext) as UserAccount;
  console.log(user);

  return !user ? <Navigate to="/login" replace /> : <Outlet />;
};
