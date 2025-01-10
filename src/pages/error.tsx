import { useRouteError } from "react-router";

export const Error: React.FunctionComponent = () => {
  const error = useRouteError();

  console.log("I Set", error);
  return <>What the hell~</>;
};
