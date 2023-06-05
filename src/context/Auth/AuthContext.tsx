import { createContext } from "react";

export interface State {
  logged: boolean;
  name?: string;
}

interface AuthContextProps {
  login: (name: string) => void;
  logout: () => void;
  authState: State;
}

export const authInitialState: State = {
  logged: false,
  name: "",
};

const initialAuthContext: AuthContextProps = {
  login: (name: string) => {
    /* */
  },
  logout: () => {
    /* */
  },
  authState: authInitialState,
};

const AuthContext = createContext<AuthContextProps>(initialAuthContext);

export default AuthContext;
