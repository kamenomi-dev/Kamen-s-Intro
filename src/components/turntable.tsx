interface IItem {
  image: string;
}

interface IProps {
  items?: Array<IItem>;
}

export const Turntable: React.FunctionComponent<IProps> = ({ items }) => {
  if (!Array.isArray(Turntable)) {
  }
  return (
    <div id="Turntable">
      {items?.map((item, index) => (
        <div
          key={"TurntableItem-" + String(index)}
          style={{
            backgroundImage: `url(${item.image})`,
          }}
        />
      ))}
    </div>
  );
};
