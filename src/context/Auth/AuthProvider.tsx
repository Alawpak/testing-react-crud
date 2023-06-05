import { ReactNode, useReducer } from "react";
import AuthContext, { authInitialState } from "./AuthContext";
import authReducer from "./AuthReducer";
import { AuthAction } from "commons/types/AuthActionTypes";
import { LoginAction, LogoutAction } from "commons/types/AuthActionCreators";

interface Props {
  children: ReactNode;
}

const init = () => {
  const user = localStorage.getItem("user");
  const parsedUser = user ? JSON.parse(user) : null;

  return {
    logged: !!parsedUser,
    name: parsedUser,
  };
};

const AuthProvider = ({ children }: Props) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState, init);

  const login = (name: string) => {
    const action: LoginAction = {
      type: AuthAction.login,
      payload: {
        name,
      },
    };

    localStorage.setItem("user", JSON.stringify(name));

    dispatch(action);
  };

  const logout = () => {
    localStorage.removeItem("user");
    const action: LogoutAction = {
      type: AuthAction.logout,
    };

    dispatch(action);
  };

  return (
    <AuthContext.Provider value={{ authState, login: login, logout: logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
