import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BaseLayout } from "../components/layouts";
import { Home } from "../pages";

export const BaseRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
