import React from "react";
import { Outlet, NavLink } from "react-router";

import { BiLinkAlt, BiInfoCircle, BiLogoGithub } from "react-icons/bi";

import { Image } from "./components";

export const Frame: React.FunctionComponent = () => {
  return (
    <>
      <header id="horizontal-header">
        <div id="navigation-area">
          <NavLink id="redirect-home" title="返回主页" to="/">
            <Image
              isCircle
              id="navigation-logo"
              src="./logo-40x40.png"
              alt="网页徽标"
            />
          </NavLink>
          <NavLink to="link_exchange" title="友情链接">
            <BiLinkAlt />
          </NavLink>
          <NavLink to="about" title="关于本页">
            <BiInfoCircle />
          </NavLink>
        </div>
        <div id="tool-area">
          <NavLink to="https://github.com/kamenomi-dev/Kamen-s-Intro">
            <BiLogoGithub />
          </NavLink>
        </div>
      </header>
      <div id="content">
        <Outlet />
      </div>
      <footer>
        <span>
          contact@kamen-dev.cv
        </span>
      </footer>
    </>
  );
};
