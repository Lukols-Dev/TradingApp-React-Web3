import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BaseLayout } from "../components/layouts";
import { LoginRegisterLayout } from "../components/layouts/login-register-layout";
import { Home, PaymentCheckout, Price } from "../pages";
import { Login } from "../pages/login/login.page";

export const BaseRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/price" element={<Price />} />
          <Route path="/checkout" element={<PaymentCheckout />} />
        </Route>
        <Route element={<LoginRegisterLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
