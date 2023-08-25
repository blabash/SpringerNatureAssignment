import React from "react";

type Props = {
  children?: React.ReactNode;
};

export const AppContainer = ({ children }: Props) => {
  return <div className="app-container">{children}</div>;
};
