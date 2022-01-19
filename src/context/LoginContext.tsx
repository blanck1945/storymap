import React, { createContext, useState } from "react";

interface LoginState {
  isLog: boolean;
  error: boolean;
  user: string;
}

interface ContextState {
  state: LoginState;
  setState: any;
}

export const LoginContenxt = createContext<ContextState>({
  state: {
    isLog: false,
    error: false,
    user: "",
  },
  setState: undefined,
});

export interface LoginProviderProps {
  children: any;
}

const LoginProvider = ({ children }: LoginProviderProps) => {
  const [state, setState] = useState<any>({
    isLog: false,
    error: false,
    user: "",
  });

  return (
    <LoginContenxt.Provider value={{ state, setState }}>
      {children}
    </LoginContenxt.Provider>
  );
};

export default LoginProvider;
