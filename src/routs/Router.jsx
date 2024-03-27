import React from "react";
import { Routes, Route } from "react-router-dom";
import ROUTES from "./routsModel";
import CardPage from "../cards/pages/CardPage";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import CardDetailPage from "../cards/pages/CardDetailPage";
import SendBox from "../sandBox/SandBox";
import Counter from "../sandBox/Counter";

export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<CardPage />} />
      <Route path={ROUTES.CARDS} element={<CardPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.CARD_INFO + "/:id"} element={<CardDetailPage />} />
      <Route path={ROUTES.SANDBOX} element={<SendBox />}>
        <Route path="counter" element={<Counter />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
