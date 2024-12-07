import { type ReactNode, type FunctionComponent } from "react";

import { Navigation } from "./components/navigation";

interface IProps {
  children: ReactNode
}

export const PageFrame: FunctionComponent<IProps> = (props) => {
  return <>
    <Navigation>

    </Navigation>
  </>
}