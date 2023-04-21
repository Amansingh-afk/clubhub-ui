import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem('role');

    if (!token) {
      navigate("/login");
      setIsAuthenticated(false);
      setRole(null);
      setIsLoading(false);
    } else {
      setIsAuthenticated(true);
      setRole(role); // replace with actual role check
      setIsLoading(false);
    }
  }, [navigate]);

  return { isAuthenticated, role, isLoading };
};

export default useAuth;