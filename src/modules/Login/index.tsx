import { Button } from "@mui/material";
import AuthContext from "context/Auth/AuthContext";
import React, { useContext } from "react";

const Login = () => {
  const { login } = useContext(AuthContext);

  return (
    <>
      <div>Login asies</div>
      <Button onClick={() => login("ola")}>Ingresar</Button>
    </>
  );
};

export default Login;
