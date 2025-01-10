import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

export const OriginalCharacter: React.FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("website.title.original-character")}</title>
      </Helmet>
    </>
  );
};
