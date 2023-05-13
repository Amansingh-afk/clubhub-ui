import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    if (!token) {
      navigate("/login");
      setIsAuthenticated(false);
      setUser(null);
      setIsLoading(false);
    } else {
      setIsAuthenticated(true);
      setUser(user);
      setIsLoading(false);
    }
  }, [navigate]);

  return { isAuthenticated, user, isLoading };
};

export default useAuth;
