import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Outlet,
} from "react-router";
import { useTranslation } from "react-i18next";

import "./utils/internationalization";
import "./styles/layout.less";

import { LoadingScreen } from "./components/loadingScreen";
import { Navigation } from "./components/navigation";
import { Error, Home, Article, Blogroll, About } from "./pages";

const Frame: React.FunctionComponent = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const navItems = [
    { label: t("navigation.content.home"), path: "/" },
    { label: t("navigation.content.article"), path: "/article" },
    { label: t("navigation.content.blogroll"), path: "/blogroll" },
    { label: t("navigation.content.about"), path: "/about" },
  ];

  return (
    <>
      <title>{t("website.title.home")}</title>
      <LoadingScreen />
      <div id="Page">
        <Navigation
          transparent
          logoImage="./logo-40x40.png"
          items={navItems.map(({ label, path }) => ({
            label: label,
            callback: () => navigate(path),
          }))}
        />
        <Outlet />
      </div>
    </>
  );
};

export const Root: React.FunctionComponent = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Frame />} errorElement={<Error />}>
        <Route index element={<Home />} />
        <Route path="article" element={<Article />} />
        <Route path="blogroll" element={<Blogroll />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById("app")!);

root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
