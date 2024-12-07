import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./i18nInit";

import { ThemeProvider } from "./providers/themeProvider";

import { PageFrame } from "./pageFrame";

import "./styles/layout.less";

// Client Side Render.
const root = createRoot(document.getElementById("app")!);

root.render(
  <StrictMode>
    <ThemeProvider>
      <PageFrame></PageFrame>
    </ThemeProvider>
  </StrictMode>
);
