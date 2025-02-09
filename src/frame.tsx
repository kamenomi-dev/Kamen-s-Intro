import React from "react";
import { Outlet, NavLink } from "react-router";
import { BiLinkAlt, BiInfoCircle, BiLogoGithub } from "react-icons/bi";

import _ from "lodash";

import { Image } from "./components";

interface IFrameContext {
  AddToolKits: (element: React.ReactElement) => void;
  RemoveToolKits: (key: string) => void;
}

const frameContext = React.createContext<IFrameContext | undefined>(undefined);

export const useFrameContext = () => {
  const context = React.useContext(frameContext);
  if (context) {
    return context;
  }

  throw new Error("err.");
};

export const Frame: React.FunctionComponent = () => {
  const [toolkitElements, setToolkitElements] = React.useState<
    React.ReactElement[]
  >([]);

  const AddToolKits = React.useCallback((element: React.ReactElement) => {
    setToolkitElements((prevElement) => {
      const lastElement = prevElement[prevElement.length - 1];

      const newKey = element?.key;
      const lastKey = lastElement?.key;

      if (newKey && lastKey === newKey) {
        return prevElement;
      }

      return [...prevElement, element];
    });
  }, []);

  const RemoveToolKits = React.useCallback((key: string) => {
    setToolkitElements((prevElement) =>
      prevElement.filter((element) => element?.key !== key)
    );
  }, []);

  const contextValue = React.useMemo(
    () => ({
      AddToolKits,
      RemoveToolKits,
    }),
    [AddToolKits, RemoveToolKits]
  );

  return (
    <frameContext.Provider value={contextValue}>
      <header id="horizontal-header">
        <div id="navigation-area">
          <NavLink id="redirect-home" title="返回主页" to="/">
            <Image
              circle
              id="navigation-logo"
              src="./logo-40x40.png"
              alt="网页徽标"
            />
          </NavLink>
          <NavLink to="link_exchange" title="友情链接">
            <BiLinkAlt size="1.5em"/>
          </NavLink>
          <NavLink to="about" title="关于本页">
            <BiInfoCircle size="1.5em"/>
          </NavLink>
        </div>
        <div id="tool-area">
          {...toolkitElements}
          <NavLink to="https://github.com/kamenomi-dev/Kamen-s-Intro">
            <BiLogoGithub size="1.5em" />
          </NavLink>
        </div>
      </header>
      <div id="content">
        <Outlet />
      </div>
      <footer>
        <span>contact@kamen-dev.cv</span>
      </footer>
    </frameContext.Provider>
  );
};
