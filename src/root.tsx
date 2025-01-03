import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router";

import "./utils/internationalization";
import "./styles/layout.sass";

import { LoadingScreen } from "./loading";

const Frame = React.lazy(() => import("./frame"));
const Home = React.lazy(() => import("./pages/home"));
const About = React.lazy(() => import("./pages/about"));
const Error = React.lazy(() => import("./pages/error"));
const Article = React.lazy(() => import("./pages/article"));
const Blogroll = React.lazy(() => import("./pages/blogroll"));

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
