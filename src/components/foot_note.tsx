import { tv, VariantProps } from "tailwind-variants";

const StylizeFootNote = tv({
  base: [
    "inline mx-2.5",
    "text-gray-80 font-segoe-small text-[1.5rem]",
  ]
});

interface IFootNoteRenderableProps extends VariantProps<typeof StylizeFootNote> {}

interface IFootNoteProps extends IFootNoteRenderableProps {
  children?: React.ReactNode | undefined;
}

export const FootNote: React.FunctionComponent<IFootNoteProps> = (props) => {
  return <nav className={StylizeFootNote(props)}>{props.children}</nav>;
};

FootNote.displayName = "Component-FootNote";