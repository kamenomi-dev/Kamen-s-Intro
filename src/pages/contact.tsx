import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

export const Contact: React.FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("website.title.contact")}</title>
      </Helmet>
    </>
  );
};
