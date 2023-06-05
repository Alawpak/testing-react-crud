import { Action } from "commons/types/AuthActionCreators";
import { AuthAction } from "commons/types/AuthActionTypes";
import { State } from "./AuthContext";

const authReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case AuthAction.login:
      return {
        ...state,
        logged: true,
        name: action.payload.name,
      };
    case AuthAction.logout:
      return {
        logged: false,
      };
    default:
      return state;
  }
};

export default authReducer;
