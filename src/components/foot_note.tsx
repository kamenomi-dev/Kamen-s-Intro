import { tv, VariantProps } from "tailwind-variants";

const StylizeFootNote = tv({
  base: [
    "inline mx-2.5",
    "text-gray-60 font-segoe-small text-[1.5rem]",
  ]
});

interface IStylizedFootNoteProps extends VariantProps<typeof StylizeFootNote> {}

interface IFootNoteProps extends IStylizedFootNoteProps {
  children?: React.ReactNode | undefined;
}

export const FootNote: React.FunctionComponent<IFootNoteProps> = (props) => {
  return <nav className={StylizeFootNote(props)}>{props.children}</nav>;
};

FootNote.displayName = "Component-FootNote";