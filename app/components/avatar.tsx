import "styles/avatar.css";
import avatar from "/images/avatar.png?url";

interface AvatarArguments {
    size?: "small" | "normal" | "large" | undefined;
    className?: string | undefined;
    withShadow?: boolean | undefined;
}

export const Avatar: React.FunctionComponent<AvatarArguments> = ({ size = "normal", withShadow = false, className="" }) => {
    return <img id="component-avatar" className={`relative drag-none size-${size} ${(!withShadow) || "rounded-full shadow-[1rem_1.75rem_3rem_0.75rem_#00000072]"} ${className}`} title="avatar" src={avatar} />;
};
