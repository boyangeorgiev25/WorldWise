import { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext(null);

const initialState = {
  user: null,
  isAuthenticated: false,
  users: JSON.parse(localStorage.getItem('worldwise-users')) || [],
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case "logout":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    case "signup": {
      const newUser = action.payload;
      const updatedUsers = [...state.users, newUser];
      localStorage.setItem('worldwise-users', JSON.stringify(updatedUsers));
      return {
        ...state,
        users: updatedUsers,
      };
    }
    default:
      throw new Error("Unknown action");
  }
}


function AuthProvider({ children }) {
  const [{ user, isAuthenticated, users }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function login(email, password) {
    // Check registered users
    const registeredUser = users.find(u => u.email === email && u.password === password);
    if (registeredUser) {
      dispatch({ type: "login", payload: registeredUser });
      return { success: true };
    }
    
    return { success: false, error: "Invalid email or password" };
  }

  function signup(name, email, password) {
    // Check if user already exists
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
      throw new Error("User with this email already exists");
    }

    const newUser = {
      name,
      email,
      password,
      avatar: `https://i.pravatar.cc/100?u=${email}`,
      id: Date.now().toString()
    };

    dispatch({ type: "signup", payload: newUser });
    return newUser;
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
        signup,
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

// eslint-disable-next-line react-refresh/only-export-components
export { AuthProvider, useAuth };