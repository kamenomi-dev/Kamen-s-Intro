import {
  type ReactNode,
  type FunctionComponent,
  useEffect,
  useState,
} from "react";

import { LoadingScreen } from "./components/loadingScreen";
import { Navigation } from "./components/navigation";

import { useTheme } from "./providers/themeProvider";

import i18next from "./i18nInit";

interface ITheme {
  theme: {
    ColorTable: {
      Background: {
        Body: string;
      };
    };
  };
}

interface IProps {
  children?: ReactNode;
}

export const PageFrame: FunctionComponent<IProps> = ({ children }) => {
  const [isLoaded, EmitLoaded] = useState<boolean>(false);

  useEffect(() => {
    i18next.then(() => {
      EmitLoaded(true);
    });
  }, []);

  const { theme } = useTheme<ITheme>().GetCurrentThemeValue();

  document.body.style.backgroundColor = theme?.ColorTable?.Background?.Body;

  return (
    <>
      {!isLoaded && <LoadingScreen />}
      <div id="Page">
        <Navigation items={[{ content: "112233" }]} />
        {children}
      </div>
    </>
  );
};
