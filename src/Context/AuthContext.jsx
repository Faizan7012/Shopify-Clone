import React from "react";

export const AuthContext = React.createContext();

function AuthContextProvider({ children }) {
  const [isAuth, setAuth] = React.useState(false);

  function toggleAuth() {
    setAuth(!isAuth);
  }

  return (
    <AuthContext.Provider value={{ isAuth, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;