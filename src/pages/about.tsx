import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

export const About: React.FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("website.title.about")}</title>
      </Helmet>
    </>
  );
};
