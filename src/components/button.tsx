import React from "react";
import { tv, VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: [
    "inline-flex items-center justify-center",
    "z-0 outline-none",
    "text-white bg-transparent",
    "gap-2",
  ],
  variants: {
    size: {
      sm: ["h-8 min-w-8 text-sm", "[&>svg]:w-4 [&>svg]:h-4"],
      md: ["h-10 min-w-10 text-base", "[&>svg]:w-5 [&>svg]:h-5"],
    },
    circle: {
      true: "rounded-full aspect-square",
      false: "rounded-lg",
    },
    noResponsive: {
      false: "hover:bg-gray-50/40 active:bg-gray-50/35",
      true: "",
    },
  },
  defaultVariants: {
    size: "md",
    circle: false,
    noResponsive: false,
  },
});

// 类型定义
interface IButtonVariantProps extends VariantProps<typeof buttonVariants> {}

interface IButtonProps
  extends IButtonVariantProps,
    React.ComponentPropsWithoutRef<"button"> {
  icon?: React.ReactNode;
  content?: string;
}

export const Button: React.FunctionComponent<IButtonProps> = ({
  size,
  icon,
  circle,
  content,
  noResponsive,
  ...props
}) => {
  props.children = undefined;

  return (
    <button
      {...props}
      
      type="button"
      className={buttonVariants({
        size,
        circle,
        className: props.className,
        noResponsive,
      })}
    >
      {icon}
      {content && <span>{content}</span>}
    </button>
  );
};

Button.displayName = "Component.Button";
