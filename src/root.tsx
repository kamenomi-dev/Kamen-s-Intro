/// <reference path="./vite-env.d.ts"/>
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider, QueryClient } from "react-query";
import { RouterProvider, createBrowserRouter } from "react-router";

import axios from "axios";

if (import.meta.env.DEV) {
  window.API_URL = "https://api.local.kamen-dev.cv:2026";
} else {
  window.API_URL = "https://api.kamen-dev.cv";
}

import "./utils/internationalization";
import "./styles/root.sass";

import { Frame } from "./frame";
import { Home, About, Error, OcState, LinkExchange } from "./pages";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Frame />,
    errorElement: <Error />,
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
        element: <LinkExchange />,
      },
    ],
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: (failureCount, error) => {
        if (axios.isAxiosError(error) && error.response?.status === 404) {
          return false;
        }

        return failureCount < 2;
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("app")!);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={browserRouter} />
    </QueryClientProvider>
  </React.StrictMode>
);
