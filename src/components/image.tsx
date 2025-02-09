import React from "react";
import { tv, VariantProps } from "tailwind-variants";

export const StylizeImage = tv({
  variants: {
    size: {
      sm: "relative h-8 w-8 min-w-8",
      md: "relative h-10 w-10 min-w-10",
      lg: "relative h-12 w-12 min-w-12",
    },
    circle: {
      true: "rounded-full aspect-square",
    },
  },
  defaultVariants: {
    size: "md",
    circle: false,
  },
});

interface IImageRenderableProps extends VariantProps<typeof StylizeImage> {}

interface IImageProps extends IImageRenderableProps, React.ComponentPropsWithoutRef<"img"> {}

export const Image: React.FunctionComponent<IImageProps> = ({
  size,
  circle,
  ...props
}) => {
  return <img {...props} className={StylizeImage({circle,size, className: props?.className})} />;
};

Image.displayName = "Component-Image";
