import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";

import "./utils/internationalization";

import { Frame } from "./frame";
// import { Home, About, Error, Contact, Blogroll, OriginalCharacter } from "./pages";

import "./styles/root.sass";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Frame />,
    // errorElement: <Error />,
    // children: [
    //   {
    //     index: true,
    //     element: <Home />,
    //   },
    //   {
    //     path: "/contact",
    //     element: <Contact />,
    //   },
    //   {
    //     path: "/blogroll",
    //     element: <Blogroll />,
    //   },
    //   {
    //     path: "/about",
    //     element: <About />,
    //   },
    //   {
    //     path: "/originalCharacter",
    //     element: <OriginalCharacter />,
    //   },
    // ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("app")!);

root.render(
  <React.StrictMode>
    <RouterProvider router={routers} />
  </React.StrictMode>
);
