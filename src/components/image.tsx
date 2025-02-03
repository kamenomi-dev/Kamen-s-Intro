import React from "react";
import { tv, VariantProps } from "tailwind-variants";

export const StylizeImage = tv({
  variants: {
    size: {
      sm: "relative h-8 w-8 min-w-8",
      md: "relative h-10 w-10 min-w-10",
      lg: "relative h-12 w-12 min-w-12",
    },
    isCircle: {
      true: "rounded-full aspect-square",
    },
  },
  defaultVariants: {
    size: "md",
    isCircle: false,
  },
});

interface IImageRenderableProps extends VariantProps<typeof StylizeImage> {}

interface IImageProps extends IImageRenderableProps {
  id?: string| undefined;
  className?: string| undefined;
  alt?: string | undefined;
  src?: string | undefined;
  sizes?: string | undefined;
  srcSet?: string | undefined;

  onLoad?: React.ReactEventHandler<HTMLImageElement>;
  onError?: () => void;
}

export const Image: React.FunctionComponent<IImageProps> = (props) => {
  let combinedClass = props.className + " " + StylizeImage(props);

  return <img {...props} className={combinedClass}></img>;
};

Image.displayName = "Component-Image";
