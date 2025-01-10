import "./styles/edit.sass";

export interface IEditProps extends React.ComponentProps<"input"> {
  iconElement?: React.ReactNode;
  buttonProps?: {
    icon: React.ReactNode;
  } & Exclude<React.ButtonHTMLAttributes<HTMLButtonElement>, "value">;
}

export const Edit: React.FunctionComponent<IEditProps> = (props) => {
  const { iconElement, buttonProps } = props;

  return (
    <div className="Edit">
      {iconElement}
      <input className="EditInput" type="text" {...props} />
      {buttonProps && <button type="button" {...buttonProps}>{buttonProps.icon}</button>}
    </div>
  );
};
