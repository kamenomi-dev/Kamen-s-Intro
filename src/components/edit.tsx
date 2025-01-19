import React from "react";
import "./styles/edit.sass";

export interface IEditProps extends React.ComponentPropsWithoutRef<"input">{
  comment?: string | undefined;
}

export const Edit: React.FC<IEditProps> = ({
  key,
  type = "text",
  value,
  comment,
  ...inputProps
}) => {
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const [isShowComment, setShowComment] = React.useState<boolean>(!value);

  React.useLayoutEffect(() => {
    const inputElement = inputRef.current;
    if (!inputElement || !comment) {
      return;
    }

    const handleBlur = () => {
      if (!inputElement.value && !isShowComment) {
        setShowComment(true);
      }
    };

    const handleFocus = () => {
      if (isShowComment) {
        setShowComment(false);
      }
    };

    inputElement.addEventListener("blur", handleBlur);
    inputElement.addEventListener("focus", handleFocus);

    return () => {
      inputElement.removeEventListener("blur", handleBlur);
      inputElement.removeEventListener("focus", handleFocus);
    };
  }, [isShowComment, comment]);

  return (
    <div key={key} className="Edit">
      <input
        {...inputProps}
        ref={inputRef}
        value={value}
        className="EditInput"
        placeholder={isShowComment ? comment : undefined}
      />
    </div>
  );
};

Edit.displayName = "Component-Edit"