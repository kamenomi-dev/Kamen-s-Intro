import {
  type ReactNode,
  type FunctionComponent,
  useEffect,
  useState,
} from "react";

import { useTranslation } from "react-i18next";

import { LoadingScreen } from "./components/loadingScreen";
import { Navigation } from "./components/navigation";

import _ from "lodash";

interface IProps {
  children?: ReactNode;
}

export const PageFrame: FunctionComponent<IProps> = ({ children }) => {
  const [isLoaded, EmitLoaded] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => EmitLoaded(true), 500);
  }, []);

  const {t} = useTranslation();

  return (
    <>
      <LoadingScreen isLoaded={isLoaded} />
      <div id="Page">
        <Navigation isTransparent={true} items={[{ content: t("navigation.content.home") }]} headPicture="./favicon.ico" />
        {children}
      </div>
    </>
  );
};
