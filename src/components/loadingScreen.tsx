import { FunctionComponent } from "react";

import _ from "lodash";

import { LoadingSymbol } from "./loadingSymbol";

export const LoadingScreen: FunctionComponent = () => {
  return (
    <div id="LoadingScreen">
      <div id="Content">
        Loading...
        <br />
        海内存知己，天涯若比邻。
        <LoadingSymbol />
      </div>
    </div>
  );
};
