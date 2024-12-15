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
  headPicture?: string;
  isTransparent?: boolean;
}

export const Navigation: FunctionComponent<IProps> = ({
  items,
  headPicture,
  isTransparent,
}) => {
  return (
    <div
      id="Navigation"
      style={{
        backgroundColor: isTransparent ? "transparent" : undefined
      }}
    >
      {headPicture && <img title="head image" src={headPicture} />}
      {items.map((item, index) => (
        <button
          key={"NavigationItem-" + String(index)}
          type="button"
          className="hover:bg-navigation-item-hover active:bg-navigation-item-active"
          onClick={item.callback}
        >
          {item.content}
        </button>
      ))}
    </div>
  );
};
