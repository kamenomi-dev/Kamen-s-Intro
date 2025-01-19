import { tv, VariantProps } from "tailwind-variants";

export const StylizeButton = tv({
  base: [
    "z-0",
    "items-center justify-center",
    "outline-none",
  ],
  variants: {
    size: {
      sm: "h-8 min-w-8",
      md: "h-10 min-w-10",
    },
    theme: {
      solid: ["text-black","bg-gray-90", "hover:bg-gray-80"],
      light: ["text-white", "bg-transparent", "hover:bg-gray-50/40"],
    },
    isCircle: {
      true: "rounded-full aspect-square",
      false: "rounded-lg",
    },
  },
  defaultVariants: {
    size: "md",
    theme: "solid",
    isCircle: false,
  },
});

interface IStylizedButtonProps extends VariantProps<typeof StylizeButton> {}

interface IButtonProps
  extends IStylizedButtonProps,
    React.ComponentProps<"button"> {}

export const Button: React.FunctionComponent<IButtonProps> = (props) => {
  return (
    <button {...props} title="0" className={StylizeButton(props)}></button>
  );
};

Button.displayName = "CompButton";
