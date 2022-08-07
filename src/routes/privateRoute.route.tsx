import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute: FC = () => {
  const token = true;

  return !token ? <Navigate to="/login" /> : <Outlet />;
};
