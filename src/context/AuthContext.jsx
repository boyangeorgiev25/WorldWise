import { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext(null);

const initialState = {
  user: null,
  isAuthenticated: false,
};

function reducer(state, action) {
  console.log("Reducer called with:", { action, currentState: state });
  
  switch (action.type) {
    case "login":
      const newLoginState = {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
      console.log("Login action - new state:", newLoginState);
      return newLoginState;
    case "logout":
      const newLogoutState = {
        ...state,
        user: null,
        isAuthenticated: false,
      };
      console.log("Logout action - new state:", newLogoutState);
      return newLogoutState;
    default:
      throw new Error("Unknown action");
  }
}

const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  console.log("AuthProvider rendering with state:", { user, isAuthenticated });

  function login(email, password) {
    console.log("Login attempt:", { email, password });
    console.log("Expected:", { email: FAKE_USER.email, password: FAKE_USER.password });
    
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      console.log("Login successful, dispatching login action");
      dispatch({ type: "login", payload: FAKE_USER });
    } else {
      console.log("Login failed - credentials don't match");
    }
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === null || context === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
  return context;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthProvider, useAuth };