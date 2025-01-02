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
import "./styles/layout.sass";

import { LoadingScreen } from "./components/loadingScreen";
import { Navigation } from "./components/navigation";

const Home = React.lazy(() => import("./pages/home"));
const About = React.lazy(() => import("./pages/about"));
const Error = React.lazy(() => import("./pages/error"));
const Article = React.lazy(() => import("./pages/article"));
const Blogroll = React.lazy(() => import("./pages/blogroll"));

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
    <React.Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route errorElement={<Error />}>
          <Route path="/" element={<Frame />}>
            <Route index element={<Home />} />
            <Route path="article" element={<Article />} />
            <Route path="blogroll" element={<Blogroll />} />
            <Route path="about" element={<About />} />
          </Route>
        </Route>
      </Routes>
    </React.Suspense>
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById("app")!);

root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
