import React, { ReactNode, useContext } from "react";

import { Navigate } from "react-router-dom";

import AuthContext from "context/Auth/AuthContext";

interface Props {
  children: ReactNode;
}

export const PublicRoute = ({ children }: Props) => {
  const { authState } = useContext(AuthContext);
  const { logged } = authState;

  return !logged ? <div>{children}</div> : <Navigate to="/admin" />;
};
