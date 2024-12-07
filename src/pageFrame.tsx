import {
  type ReactNode,
  type FunctionComponent,
  useEffect,
  useState,
} from "react";

import { LoadingScreen } from "./components/loadingScreen";
import { Navigation } from "./components/navigation";

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
    const listener = () => setTimeout(() => EmitLoaded(true), 500);
    window.addEventListener("load", listener);

    return () => window.removeEventListener("load", listener);
  }, []);

  return (
    <>
      <LoadingScreen isLoaded={isLoaded} />
      <div id="Page">
        <Navigation style="transparent" items={[{ content: "112233" }]} headPicture="./favicon.ico" />
        {children}
      </div>
    </>
  );
};
