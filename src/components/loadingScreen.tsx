import { FunctionComponent, useEffect, useState } from "react";

import _ from "lodash"

interface IProps {

}

export const LoadingScreen: FunctionComponent<IProps> = (props) => {
  return <div id="LoadingScreen" style={{
    backgroundColor:"#444B56"
  }}>
    Loadding
  </div>
};
