import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

import { useFrameContext } from "../frame";

import "./styles/home.sass";

export const Home: React.FunctionComponent = () => {
  const { t } = useTranslation();
  const { applyFrontPageElement } = useFrameContext();
  applyFrontPageElement(<>我草????</>);
  return (
    <>
      <Helmet>
        <title>{t("website.title.home")}</title>
      </Helmet>
    </>
  );
};
