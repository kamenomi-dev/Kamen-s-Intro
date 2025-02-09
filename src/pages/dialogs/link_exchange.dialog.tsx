import React from "react";
import { BiX } from "react-icons/bi";

import { tv } from "tailwind-variants";

import { Button } from "@components";

const dialogLayout = tv({
  slots: {
    // 根容器
    base: [
      "z-10 absolute inset-0 h-screen",
      "flex items-center justify-center",
      "bg-gray-20/80 backdrop-blur-sm",
      "transition-all duration-1000 ease-in-out",
    ],
    content: [
      "flex gap-4 items-start",
      "relative",
      "min-w-[300px] max-w-[90vw]",
      "bg-gray-50 rounded-lg shadow-xl p-6",
    ],
    closeButton: "absolute right-0 top-0",
  },

  variants: {
    slideOut: {
      true: "-top-full opacity-0",
      false: "top-0"
    },
  },
});

const { base, content, closeButton } = dialogLayout();

interface DialogProps extends React.PropsWithChildren {
  slideOut?: boolean;

  onSubmit?: () => void;
  onClose?: () => void;
}

export const LinkExchangeDialog: React.FC<DialogProps> = ({
  children,
  slideOut,

  onClose,
  onSubmit,
}) => {
  const [isSlideOut, setSlideOut] =  React.useState<boolean>(true)

  React.useEffect(() => {
    setSlideOut(!!slideOut);
  }, [slideOut]);

  React.useEffect(() => {
    if (isSlideOut) {
      onClose?.();
    }
  }, [isSlideOut]);

  return (
    <div className={base({slideOut: isSlideOut})}>
      <div className={content()}>
        <div>
          <Button
            size="sm"
            title="关闭"
            aria-label="关闭"
            icon={<BiX />}
            circle
            noResponsive
            onClick={() => setSlideOut(true)}
            className={closeButton()}
          />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

LinkExchangeDialog.displayName = "ErrorDialog";
