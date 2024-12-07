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
  style?: "transparent";
  headPicture?: string
}

export const Navigation: FunctionComponent<IProps> = ({ items, style, headPicture }) => {
  return (
    <div id="Navigation" className={style ? "style-" + style : undefined}>
      {headPicture && <img title="head image" src={headPicture}/>}
      {items.map((item, index) => (
        <button
          id={"NavigationItem-" + String(index)}
          key={"NavigationItem-" + String(index)}
          type="button"
          onClick={item.callback}
        >
          {item.content}
        </button>
      ))}
    </div>
  );
};
