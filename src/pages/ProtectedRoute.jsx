import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { useEffect } from "react";
import PropTypes from "prop-types";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  console.log("ProtectedRoute - isAuthenticated:", isAuthenticated);

  useEffect(
    function () {
      if (!isAuthenticated) {
        console.log("Not authenticated, navigating to /");
        navigate("/");
      }
    },
    [isAuthenticated, navigate]
  );

  if (!isAuthenticated) {
    console.log("Returning null - not authenticated");
    return null;
  }

  console.log("Returning children - authenticated");
  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;