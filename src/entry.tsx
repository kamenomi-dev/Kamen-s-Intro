import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ThemeProvider } from "./providers/themeProvider";

import "./i18nInit";

const Main = () => <ThemeProvider></ThemeProvider>;

// Server Side Render.
const root = createRoot(document.getElementById("app")!);

root.render(
  <StrictMode>
    <Main />
  </StrictMode>
);
