import { type ReactNode, type FunctionComponent } from "react";

interface IProps {
  children?: ReactNode
}

export const Navigation: FunctionComponent<IProps> = (props) =>{
  return <div id="Navigation">
    {props.children}
  </div>
}