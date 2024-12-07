import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./utils/internationalization";

import { ThemeProvider } from "./providers/themeProvider";

import { PageFrame } from "./pageFrame";

import "./styles/layout.less";

// Client Side Render.
const root = createRoot(document.getElementById("app")!);

root.render(
  <StrictMode>
    <ThemeProvider themeFilePath="../themes">
      <PageFrame></PageFrame>
    </ThemeProvider>
  </StrictMode>
);
