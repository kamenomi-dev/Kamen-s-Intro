import {
  type ReactNode,
  type FunctionComponent,
  type MouseEventHandler,
} from "react";

type Titem = {
  content: ReactNode;
  callback?: MouseEventHandler;

  freezed?: boolean;
  disabled?: boolean;
};

interface IProps {
  items: Titem[];
  logoImage?: string;
  isTransparent?: boolean;
}

export const Navigation: FunctionComponent<IProps> = ({
  items,
  logoImage,
  isTransparent,
}) => {
  return (
    <div
      id="Navigation"
      style={{
        backgroundColor: isTransparent ? "transparent" : undefined
      }}
    >
      {logoImage && <img title="Logo" src={logoImage} />}
      {items.map((item, index) => (
        <button
          key={"NavigationItem-" + String(index)}
          type="button"
          className="after:bg-navigation-item-normal after:active:bg-navigation-item-active"
          onClick={item.callback}
        >
          {item.content}
        </button>
      ))}
    </div>
  );
};
