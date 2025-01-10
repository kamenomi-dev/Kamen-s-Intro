import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import "./utils/internationalization";
import "./styles/layout.sass";

import { Frame } from "./frame";
import { Home, About, Error, Contact, Blogroll, OriginalCharacter } from "./pages";

const routers = createBrowserRouter([
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
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blogroll",
        element: <Blogroll />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/originalCharacter",
        element: <OriginalCharacter />,
      },
    ],
  },
]);

export const Root: React.FunctionComponent = () => (
  <RouterProvider router={routers} />
);

const root = ReactDOM.createRoot(document.getElementById("app")!);

root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
