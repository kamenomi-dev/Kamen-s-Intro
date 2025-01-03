import { useTranslation } from "react-i18next";
import { useNavigate, Outlet } from "react-router";
import { Navigation } from "./components/navigation";

const Frame: React.FunctionComponent = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const navItems = [
    { label: t("navigation.content.home"), path: "/" },
    { label: t("navigation.content.article"), path: "/article" },
    { label: t("navigation.content.blogroll"), path: "/blogroll" },
    { label: t("navigation.content.about"), path: "/about" },
  ];

  return (
    <>
      <div id="Page">
        <Navigation
          transparent
          logoImage="./logo-40x40.png"
          items={navItems.map(({ label, path }) => ({
            label: label,
            callback: () => navigate(path),
          }))}
        />
        <Outlet />
      </div>
    </>
  );
};

export default Frame;