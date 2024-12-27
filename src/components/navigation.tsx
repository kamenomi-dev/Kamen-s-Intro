import { ReactNode, FunctionComponent, MouseEventHandler } from "react";

type NavigationItem = {
  label: ReactNode;
  callback?: MouseEventHandler;
  freezed?: boolean; // Unused in current implementation; consider removing if unnecessary
  disabled?: boolean; // Unused in current implementation; consider removing if unnecessary
};

interface NavigationProps {
  items: NavigationItem[];
  logoImage?: string;
  transparent?: boolean;
}

export const Navigation: FunctionComponent<NavigationProps> = ({
  items,
  logoImage,
  transparent = false,
}) => {
  return (
    <div
      id="Navigation"
      style={{ backgroundColor: transparent ? "transparent" : "inherit" }}
    >
      {logoImage && <img title="Logo" src={logoImage} alt="Logo" />}
      {items.map(({ label, callback }, index) => (
        <button
          key={`NavigationItem-${index}`}
          type="button"
          className="after:bg-navigation-item-normal after:active:bg-navigation-item-active"
          onClick={callback}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
