import React, { ReactNode, useContext } from "react";

import { Navigate } from "react-router-dom";

import AuthContext from "context/Auth/AuthContext";

interface Props {
  children: ReactNode;
}

export const PrivateRoute = ({ children }: Props) => {
  const { authState } = useContext(AuthContext);
  const { logged } = authState;

  return logged ? (
    <div className="main">{children}</div>
  ) : (
    <Navigate to="/login" />
  );
};
