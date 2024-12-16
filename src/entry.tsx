import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./utils/internationalization";

import { PageFrame } from "./pageFrame";

import "./styles/layout.less";


// Client Side Render.
const root = createRoot(document.getElementById("app")!);

root.render(
  <StrictMode>
      <PageFrame>
        
      </PageFrame>
  </StrictMode>
);
