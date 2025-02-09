import { tv, VariantProps } from "tailwind-variants";

export const LinkFrame = tv({
  base: "bg-gray-20 rounded-lg inline-block w-full h-16",
  variants: {
    variant: {
      simplified: null
    }
  }
});

export const LinkLogo = tv({
  base: "inline-block [&>*]:aspect-square",
  variants: {
    variant: {
      simplified: "hidden"
    }
  }
});

export const LinkContent = tv({
  base: "inline-block align-top mx-2 [&>*:not(:first-child)]:text-gray-35",
  variants: {
    variant: {
      simplified: "hidden"
    }
  }
});

export type LinkVariantProps = VariantProps<typeof LinkFrame>;

export interface LinkProps extends LinkVariantProps {
  url: string;
  title?: string;
  favicon?: string;
  description?: string;
  
  /** @deprecated 使用 description 替代 */
  alt?: string;
}

export const Link: React.FunctionComponent<LinkProps> = ({
  variant,
  url,
  title,
  favicon,
  description,
  alt
}) => {
  const displayTitle = title || new URL(url).hostname;
  const displayDescription = description || alt || "";

  if (import.meta.env.DEV && alt) {
    console.warn('Link组件: alt 属性已弃用，请使用 description 替代')
  }

  return (
    <a
      href={url}
      className={LinkFrame({ variant })}
      aria-label={displayTitle}
    >
      {favicon && (
        <div className={LinkLogo({ variant })}>
          <img 
            src={favicon} 
            alt={displayTitle} 
            loading="lazy"
            className="w-auto h-full"
          />
        </div>
      )}
      <div className={LinkContent({ variant })}>
        <span className="block font-medium line-clamp-1">{displayTitle}</span>
        {displayDescription && (
          <span className="block text-sm line-clamp-1">
            {displayDescription}
          </span>
        )}
      </div>
    </a>
  );
};

// 保持原有 displayName 不变
Link.displayName = "Component-Link";