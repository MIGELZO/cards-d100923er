import React from "react";
import { Routes, Route } from "react-router-dom";
import ROUTES from "./routsModel";
import CardsPage from "../cards/pages/CardsPage";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import CardDetailPage from "../cards/pages/CardDetailPage";
import SendBox from "../sandBox/SandBox";
import Counter from "../sandBox/Counter";
import LifeCycle from "../sandBox/LifeCycle";
import Countries from "../sandBox/countries/Countries";
import FormExample from "../sandBox/FormExample";
import ResizedWindow from "../sandBox/ResizedWindow";

export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<CardsPage />} />
      <Route path={ROUTES.CARDS} element={<CardsPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.CARD_INFO + "/:id"} element={<CardDetailPage />} />
      <Route path={ROUTES.SANDBOX} element={<SendBox />}>
        <Route path="counter" element={<Counter />} />
        <Route path="LifeCycle" element={<LifeCycle />} />
        <Route path="countries" element={<Countries />} />
        <Route path="form" element={<FormExample />} />
        <Route path="ResizedWindow" element={<ResizedWindow />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
