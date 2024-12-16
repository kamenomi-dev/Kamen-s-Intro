import { FunctionComponent, useEffect, useState } from "react";

import _ from "lodash";

import { LoadingSymbol } from "./loadingSymbol";

interface IProps {
  isLoaded: boolean;
}

export const LoadingScreen: FunctionComponent<IProps> = ({ isLoaded }) => {
  const [isSlidOut, SetSlidOut] = useState(false);

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    setTimeout(() => {
      SetSlidOut(true);
    }, 2000);
  }, [isLoaded]);
  return (
    <div
      id="LoadingScreen"
      style={{
        top: isSlidOut ? "-100%" : undefined,
        opacity: isSlidOut ? "0" : undefined,
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
