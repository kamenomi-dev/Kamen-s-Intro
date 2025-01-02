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
      className={"z-10 " + transparent ? "bg-transparent" : "bg-gray-15"}
    >
      {logoImage && (
        <img
          alt="Logo"
          title="Logo"
          src={logoImage}
        />
      )}
      {items.map(({ label, callback }, index) => (
        <button
          key={`NavigationItem-${index}`}
          type="button"
          onClick={callback}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
