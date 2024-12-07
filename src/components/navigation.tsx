import { type ReactNode, type FunctionComponent } from "react";

type Titem = {
  content: ReactNode;
  callback?: Function;

  freezed?: boolean;
  disabled?: boolean;
};

interface IProps {
  items: Titem[];
}

export const Navigation: FunctionComponent<IProps> = ({ items }) => {
  return (
    <div id="Navigation">
      {items.map((item, index) => (
        <div
          id={`NavigationItem-${index.toString()}`}
          key={`NavigationItem-${index.toString()}`}
        >
          {item.content}
        </div>
      ))}
    </div>
  );
};
