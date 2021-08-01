/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import dynamic from "next/dynamic";
import React from "react";
import CircularProgress from "./CircularProgress";

export default function asyncComponent(importComponent): React.ComponentType {
  return dynamic(importComponent, {
    // eslint-disable-next-line react/display-name
    loading: () => <CircularProgress />,
  });
}
