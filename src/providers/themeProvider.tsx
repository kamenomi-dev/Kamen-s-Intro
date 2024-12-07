import React, {
  type ReactNode,
  type FunctionComponent,
  createContext,
  useEffect,
  useContext,
  useState,
} from "react";

import axios from "axios";
import { XMLParser } from "fast-xml-parser";

type TSupportTheme = "lightness" | "darkness";

interface IContext<Theme = Record<string, any>> {
  currentTheme: TSupportTheme;
  currentThemeValue: Theme;

  GetCurrentTheme: () => string;
  SetCurrentTheme: (theme: TSupportTheme) => void;
  GetCurrentThemeValue: () => Theme;
}

const context = createContext<IContext | undefined>(undefined);

interface IProps {
  children?: ReactNode;
  themeFilePath?: string;
}

interface IState {
  currentTheme: TSupportTheme;
  currentThemeValue: object;
}

function __IsBroswerThemeLightness() {
  return window.matchMedia("(prefers-color-scheme: light)").matches;
}

function __AdaptBroswerTheme(
  this: React.Dispatch<React.SetStateAction<IState>>,
  themePath: string
) {
  const themeListener = window.matchMedia("(prefers-color-scheme: light)");
  const listener = ({ matches }: { matches: boolean }) => {
    SetWebsiteTheme.bind(this)(themePath, matches ? "lightness" : "darkness");
  };

  themeListener.addEventListener("change", listener);
  return () => {
    themeListener.removeEventListener("change", listener);
  };
}

async function SetWebsiteTheme(
  this: React.Dispatch<React.SetStateAction<IState>>,
  themeFilePath: string,
  theme: TSupportTheme
) {
  const themeValue = await axios.get(`${themeFilePath}/${theme}.theme`, {
    transformResponse: function (data, _headers, status) {
      // OK or 301, 302, etc.
      if (status && status != 200 && !(300 <= status && status <= 400)) {
        throw new Error(`Not found the theme: ${theme}!`);
      }

      if (typeof data == "string") {
        try {
          console.log(new XMLParser().parse(data));
          return { type: "xml", theme: new XMLParser().parse(data)["Theme"] };
        } catch (err) {
          try {
            return { type: "json", theme: JSON.parse(data) };
          } catch (err) {}
        }
      }

      throw new Error(`Cannot load the theme: ${theme}!`);
    },
  });

  const { data, status } = themeValue;

  if (status != 200 && !(300 <= status && status <= 400)) {
    throw new Error(`Cannot request the theme: ${theme}!`);
  }

  if (typeof data != "object") {
    throw new Error(`Cannot load the theme: ${theme}! That's not json file.`);
  }

  this({
    currentTheme: theme,
    currentThemeValue: data,
  });
}

export const ThemeProvider: FunctionComponent<IProps> = ({
  children,
  themeFilePath,
}) => {
  themeFilePath ||= "/themes";

  const [currentState, SetCurrentState] = useState<IState>({
    currentTheme: __IsBroswerThemeLightness() ? "lightness" : "darkness",
    currentThemeValue: {},
  });

  useEffect(__AdaptBroswerTheme.bind(SetCurrentState, themeFilePath), []);

  const { currentTheme, currentThemeValue } = currentState;

  if (!currentThemeValue || Object.keys(currentThemeValue).length == 0) {
    SetWebsiteTheme.bind(SetCurrentState)(themeFilePath, currentTheme);
  }

  return (
    <context.Provider
      value={{
        currentTheme,
        currentThemeValue: currentThemeValue,
        GetCurrentTheme: () => currentTheme,
        SetCurrentTheme: (theme: TSupportTheme) => {
          SetWebsiteTheme.bind(SetCurrentState)(themeFilePath, theme);
        },
        GetCurrentThemeValue: () => currentThemeValue,
      }}
    >
      {children}1
    </context.Provider>
  );
};

export function useTheme<Theme>() {
  const contextValue = useContext(context);
  if (contextValue == undefined) {
    throw new Error(`Function "useTheme" must be used within a ThemeProvider!`);
  }

  return contextValue as IContext<Theme>;
}
