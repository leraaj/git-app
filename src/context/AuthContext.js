import { createContext, useLayoutEffect, useReducer, useState } from "react";

export const AuthContext = createContext();
const API = `${process.env.REACT_APP_API_URL}/api/`;
const URL = `${API}user/current-user`;

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      localStorage.clear();
      return { user: undefined };
    default:
      return state;
  }
};
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const refreshUser = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        sameSite: "None",
      });
      const data = await response.json();
      if (response.ok) {
        setIsLoading(false);
        dispatch({ type: "LOGIN", payload: data.user });
      } else {
        console.log("message: ", data.message);
        setError(data.message);
        dispatch({ type: "LOGOUT", payload: undefined });
      }
    } catch (error) {
      setError(error);
      console.error("Error refreshing user:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useLayoutEffect(() => {
    refreshUser();
  }, [URL]);

  return (
    <AuthContext.Provider value={{ ...state, dispatch, isLoading, error }}>
      {children}
    </AuthContext.Provider>
  );
};
