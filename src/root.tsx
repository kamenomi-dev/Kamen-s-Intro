/// <reference path="./vite-env.d.ts"/>
import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";

if (import.meta.env.DEV) {
  window.API_URL = "https://192.168.10.7:2026";
} else {
  window.API_URL = "https://api.kamen-dev.cv";
}

import "./utils/internationalization";
import "./styles/root.sass";

import { Frame } from "./frame";
import { Home, About, Error, OcState, LinkExchange } from "./pages";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Frame />,
    errorElement: <Error />,
    // hydrateFallbackElement: "加载中。", Wired
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/oc_state",
        element: <OcState />,
      },
      {
        path: "/link_exchange",
        element:<LinkExchange />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("app")!);

root.render(
  <React.StrictMode>
    <RouterProvider router={routers} />
  </React.StrictMode>
);
