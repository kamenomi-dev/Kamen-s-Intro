import React, {
  type ReactNode,
  type FunctionComponent,
  createContext,
  useEffect,
  useContext,
  useState,
} from "react";

import "less"

type TSupportTheme = "lightness" | "darkness";

interface IContext {
  currentTheme: TSupportTheme;

  GetCurrentTheme: () => string;
  SetCurrentTheme: (theme: TSupportTheme) => void;
}

const context = createContext<IContext | undefined>(undefined);

interface IProps {
  children?: ReactNode;
  themeFilePath?: string;
}

function __IsBroswerThemeLightness() {
  return window.matchMedia("(prefers-color-scheme: light)").matches;
}

function __AdaptBroswerTheme(
  Setter: React.Dispatch<React.SetStateAction<TSupportTheme>>,
) {
  const themeListener = window.matchMedia("(prefers-color-scheme: light)");
  const listener = ({ matches }: { matches: boolean }) => {
    Setter(matches ? "lightness" : "darkness");
  };

  themeListener.addEventListener("change", listener);
  return () => {
    themeListener.removeEventListener("change", listener);
  };
}

export const ThemeProvider: FunctionComponent<IProps> = ({
  children,
  themeFilePath,
}) => {
  themeFilePath ||= "/themes";

  const [currentTheme, SetCurrentTheme] = useState<TSupportTheme>(
    __IsBroswerThemeLightness() ? "lightness" : "darkness"
  );

  useEffect(() => __AdaptBroswerTheme(SetCurrentTheme), []);
  // import(themeFilePath + "/" + currentTheme + ".less")
  return (
    <context.Provider
      value={{
        currentTheme,
        GetCurrentTheme: () => currentTheme,
        SetCurrentTheme: (theme: TSupportTheme) => {
          SetCurrentTheme(theme);
        },
      }}
    >
      <link rel="stylesheet" href={themeFilePath + "/" + currentTheme + ".css"} />
      {children}
    </context.Provider>
  );
};

export function useTheme() {
  const contextValue = useContext(context);
  if (contextValue == undefined) {
    throw new Error(`Function "useTheme" must be used within a ThemeProvider!`);
  }

  return contextValue;
}
