import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BaseLayout, SettingLayout } from "../components/layouts";
import { UserAccountLayout } from "../components/layouts/account-layout";
import { LoginRegisterLayout } from "../components/layouts/login-register-layout";
import { CheckoutForm } from "../components/subscription";
import { UserAuthContextProvider } from "../context/auth.context";
import { Home, PaymentCheckout, Price, Subscription } from "../pages";
import { Login } from "../pages/login/login.page";
import { Dashboard } from "../pages/user/dashboard.page";
import { SubscriptionPlans } from "../pages/user/plans.page";
import { FormRoute } from "./formRoute";
import { PrivateRoute } from "./privateRoute.route";

export const BaseRoutes: FC = () => {
  return (
    <UserAuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/test" element={<CheckoutForm />} />
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
            <Route path="/subscription" element={<Subscription />} />
            <Route element={<UserAccountLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/settings" element={<SettingLayout />}>
                <Route path="plans" element={<SubscriptionPlans />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </UserAuthContextProvider>
  );
};
