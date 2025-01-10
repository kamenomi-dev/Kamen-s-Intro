import { ReactNode, FunctionComponent, MouseEventHandler } from "react";
import { NavLink } from "react-router";

type NavigationItem = {
  label: ReactNode;

  disabled?: boolean;
  jumpPath?: string;
  callback?: MouseEventHandler;
  description?: string;
};

interface NavigationProps {
  items: NavigationItem[];

  logo?: {
    source: string;
    description: string;
  };
  transparent?: boolean;
}

export const Navigation: FunctionComponent<NavigationProps> = ({
  logo,
  items,
  transparent,
}) => {
  const isConflict =
    items.filter(
      (item) => item.jumpPath != undefined && item.callback != undefined
    ).length != 0;

  if (isConflict) {
    throw new Error("One of items has both callback && jumpPath");
  }

  return (
    <div
      className={"Navigation"}
      x-extended-attribute={transparent && "background-transparent"}
    >
      {logo && (
        <img
          alt="NavigationLogo"
          src={logo?.source}
          title={logo?.description}
        />
      )}

      {items.map((item, index) => {
        const uniqueKey =
          "NavItem-" +
          (item.jumpPath ? "Redirectable" : "Triggerable") +
          "-" +
          index;

        if (item.jumpPath)
          return (
            <NavLink
              to={item.jumpPath}
              key={uniqueKey}
              title={item.description}
            >
              {item.label}
            </NavLink>
          );

        return (
          <button
            key={uniqueKey}
            type="button"
            title={item.description}
            onClick={item.callback}
            disabled={item.disabled}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
};
