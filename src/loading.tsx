import { FunctionComponent } from "react";
import { LoadingSymbol } from "./components/loadingSymbol";

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