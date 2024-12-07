import { FunctionComponent, useEffect, useState } from "react";

import _ from "lodash";

interface IProps {
  isLoaded: boolean;
}

export const LoadingScreen: FunctionComponent<IProps> = ({ isLoaded }) => {
  return (
    <div
      id="LoadingScreen"
      className={isLoaded ? "Hidden" : undefined}
      style={{
        backgroundColor: "#444B56",
      }}
    >
      Loadding
    </div>
  );
};
