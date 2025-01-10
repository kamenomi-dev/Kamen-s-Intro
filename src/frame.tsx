import React from "react";
import { Outlet } from "react-router";
import { useTranslation } from "react-i18next";

import { Edit } from "./components";
import { SlMagnifier } from "react-icons/sl";

export interface IFrameContext {
  applyFrontPageElement: (element: React.ReactElement) => void;
}

export const Frame: React.FunctionComponent = () => {
  const { t } = useTranslation();

  const navItems = [
    { label: t("navigation.content.home"), path: "/" },
    { label: t("navigation.content.article"), path: "/article" },
    { label: t("navigation.content.blogroll"), path: "/blogroll" },
    { label: t("navigation.content.about"), path: "/about" },
  ];

  return (
    <>
      <header id="horizontal-header">
        <div className="titleArea">
          <h2>Kamenomi</h2>
        </div>
        <form className="searchArea" action="/search">
          <Edit
            id="searchInput"
            name="target"
            title="键入所想寻求的内容"
            buttonProps={{
              icon: <SlMagnifier />,
              type: "submit"
            }}
          />
        </form>
        <div className="toolArea">开发当中</div>
      </header>
      <nav id="vertical-sidebar"></nav>
      <div id="content">
        <Outlet />
        123
      </div>
    </>
  );
};
