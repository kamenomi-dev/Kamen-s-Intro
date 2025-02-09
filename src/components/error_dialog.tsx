import React from "react";
import { BiErrorCircle, BiX } from "react-icons/bi";
import { Button } from "./button";
import { tv } from "tailwind-variants";

// 核心布局修复
const dialogLayout = tv({
  slots: {
    // 根容器
    base: [
      "z-10 fixed inset-0",
      "flex items-center justify-center",
      "bg-gray-20/80 backdrop-blur-sm",
      "transition-all duration-1000 ease-in-out",
    ],
    // 内容容器
    content: [
      "flex gap-4 items-start", 
      "relative",
      "min-w-[300px] max-w-[90vw]",
      "bg-gray-50 rounded-lg shadow-xl p-6",
    ],
    icon: [
      "flex-shrink-0",
      "w-[3em] h-[3em] mt-1",
    ],
    
    text: "flex flex-col gap-1 flex-grow", 
    closeButton: "absolute -right-3 -top-3", 
  },
});

const { base, content, icon, text, closeButton } = dialogLayout();

interface ErrorDialogProps extends React.PropsWithChildren {
  onClose?: () => void;
}

export const ErrorDialog: React.FC<ErrorDialogProps> = ({
  children,
  onClose,
}) => {
  const [[isVisible, setVisible], [isSlideOut, setSlideOut]] = [
    React.useState<boolean>(true),
    React.useState<boolean>(false),
  ];

  const errorDetail = children || "未知错误, 请查阅控制台 !";

  React.useEffect(() => {
    if (isSlideOut) {
      const timer = setTimeout(() => {
        setVisible(false);
        onClose?.();
      }, 1000);
      
      return () => clearTimeout(timer);
    }

    return () => {};
  }, [isSlideOut, onClose]);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={base({ className: isSlideOut ? "-top-1/2 opacity-0" : "" })}
    >
      <div className={content()}>
        {/* 图标与文字横向排列 */}
        <BiErrorCircle color="red" className={icon()} />

        <div className={text()}>
          <h1 className="text-xl font-bold">Error!</h1>
          <p className="break-words">{errorDetail}</p>
        </div>

        <Button
          size="sm"
          icon={<BiX />}
          circle
          noResponsive
          onClick={() => setSlideOut(true)}
          aria-label="关闭"
          className={closeButton()}
        />
      </div>
    </div>
  );
};

ErrorDialog.displayName = "ErrorDialog";
