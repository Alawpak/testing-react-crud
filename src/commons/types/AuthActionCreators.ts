import { AuthAction } from "./AuthActionTypes";

export interface LoginAction {
  type: AuthAction.login;
  payload: {
    name: string;
  };
}

export interface LogoutAction {
  type: AuthAction.logout;
}

export type Action = LoginAction | LogoutAction;
