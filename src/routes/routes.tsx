import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BaseLayout } from "../components/layouts";
import { LoginRegisterLayout } from "../components/layouts/login-register-layout";
import { UserAuthContextProvider } from "../context/auth.context";
import { Home, PaymentCheckout, Price, Subscription } from "../pages";
import { Login } from "../pages/login/login.page";
import { FormRoute } from "./formRoute";
import { PrivateRoute } from "./privateRoute.route";

export const BaseRoutes: FC = () => {
  return (
    <UserAuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<BaseLayout />}>
            <Route path="/" element={<Home />} />
            <Route element={<FormRoute />}>
              <Route path="/price" element={<Price />} />
            </Route>
            <Route path="/checkout" element={<PaymentCheckout />} />
          </Route>
          <Route element={<LoginRegisterLayout />}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Subscription />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserAuthContextProvider>
  );
};
