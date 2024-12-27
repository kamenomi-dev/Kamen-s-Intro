import { FunctionComponent, useEffect, useRef, useState } from "react";

import _ from "lodash";

import { LoadingSymbol } from "./loadingSymbol";

export const LoadingScreen: FunctionComponent = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    // No reason why.
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000)
  }, []);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    // animation needs 600ms to act, from ./styles/loadingScreen.less
    setTimeout(() => {
      ref.current?.remove();
    }, 600); 
  }, [isLoaded]);

  return (
    <div
      id="LoadingScreen"
      ref={ref}
      style={{
        top: isLoaded ? "-100%" : undefined,
        opacity: isLoaded ? "0" : undefined,
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
