import { tv, VariantProps } from "tailwind-variants";
import "./styles/link.sass";

export const StylizeLinkFrame = tv({
  base: ["bg-gray-20", "rounded-lg my-2", "inline-block w-full h-16"],

  variants: {
    variant: {
      simplied: undefined,
    },
  },
});

export const StylizeLinkLogo = tv({
  base: ["inline-block [>*]:aspect-square"],

  variants: {
    variant: {
      simplied: "hidden",
    },
  },
});

export const StylizeLinkDescription = tv({
  base: [
    "inline-block align-top relative top-0 mx-2",
    "[&>*:not(:first-child)]:text-gray-35",
  ],

  variants: {
    variant: {
      simplied: "hidden",
    },
  },
});

// -

export interface ILinkRenderableProps
  extends VariantProps<typeof StylizeLinkFrame> {}

export interface ILinkProps extends ILinkRenderableProps {
  url: string;
  title?: string;
  favicon?: string;
  description?: string;

  /**
   * @deprecated please use `description` instead.
   */
  alt?: string;
}

// -

export const Link: React.FunctionComponent<ILinkProps> = (props) => {
  const { url, favicon } = props;
  const title = props.title || url;
  const description = props.description || props.alt || "";

  return (
    <a href={url} className={StylizeLinkFrame()}>
      {!!favicon && (
        <div className={StylizeLinkLogo(props)}>
          <img src={favicon} alt={props.title} />
        </div>
      )}
      <div className={StylizeLinkDescription(props)}>
        <span>{title}</span>
        <br />
        <span>{description}</span>
      </div>
    </a>
  );
};

Link.displayName = "Component-Link";
