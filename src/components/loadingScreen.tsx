import { FunctionComponent } from "react";

import _ from "lodash";

import { LoadingSymbol } from "./loadingSymbol";

interface IProps {
  isLoaded: boolean;
}

export const LoadingScreen: FunctionComponent<IProps> = ({ isLoaded }) => {
  return (
    <div
      id="LoadingScreen"
      className={isLoaded ? "Hidden" : undefined}
      style={{
        color: "white",
        backgroundColor: "#444B56",
      }}
    >
      <div id="Content">
        Loading...
        <br />
        海内存知己，天涯若比邻。
        <LoadingSymbol />
        </div>
    </div>
  );
};
