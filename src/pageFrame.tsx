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
    setTimeout(() => EmitLoaded(true), 3000);
  }, []);

  const { t } = useTranslation();

  document.title = t("website.title.home");

  return (
    <>
      <LoadingScreen isLoaded={isLoaded} />
      <div id="Page">
        <Navigation
          isTransparent={true}
          items={[
            {
              content: t("navigation.content.home"),
              callback: () => {
                location.href = "";
              },
            },
            { content: t("navigation.content.article") },
            { content: t("navigation.content.blogroll") },
            { content: t("navigation.content.about") },
          ]}
          logoImage="./logo-40x40.png"
        />
        {children}
      </div>
    </>
  );
};
