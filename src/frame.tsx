import React from "react";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router";

import { Navigation } from "./components/navigation";

export interface IFrameContext {
  applyFrontPageElement: (element: React.ReactElement) => void;
}

const frameContext = React.createContext<IFrameContext | null>(null);

export const useFrameContext = () => {
  const context = React.useContext(frameContext);
  if (context == null) {
    throw new Error(`Error, calling useFrameContext function out of provider.`);
  }

  return context;
}

export const Frame: React.FunctionComponent = () => {
  const { t } = useTranslation();

  const navItems = [
    {
      label: t("navigation.label.home"),
      description: t("navigation.description.home"),
      jumpPath: "/",
    },
    {
      label: t("navigation.label.contact"),
      description: t("navigation.description.contact"),
      jumpPath: "/contact",
    },
    {
      label: t("navigation.label.blogroll"),
      description: t("navigation.description.blogroll"),
      jumpPath: "/blogroll",
    },
    {
      label: t("navigation.label.about"),
      description: t("navigation.description.about"),
      jumpPath: "/about",
    },
  ];

  var frontPageOutlet: any;
  var applyFrontPageElement: (a: any) => void;
  React.useEffect(() => {
    [frontPageOutlet, applyFrontPageElement] = React.useState(<></>);
  console.log(frontPageOutlet, applyFrontPageElement)
}, []);
  console.log(frontPageOutlet, applyFrontPageElement)
  return (
    <frameContext.Provider value={{ applyFrontPageElement }}>
      <div id="Page">
        <Navigation
          logo={{
            source: "./images/logo-40x40.png",
            description: t("navigation.description.logo"),
          }}
          items={navItems}
        />

        {/* The bannar is out of document stream. */}
        <div className="Banner" />
        <div className="FrontPage">{frontPageOutlet}</div>
        <div className="Content">
          <Outlet />
        </div>
      </div>
    </frameContext.Provider>
  );
};