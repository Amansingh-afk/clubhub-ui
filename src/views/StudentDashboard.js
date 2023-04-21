import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import useAuth from "../hooks/UseAuth";

const StudentDashboard = () => {
  const navigate = useNavigate();
  const { isAuthenticated, role, isLoading } = useAuth();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  } else if (role !== "student") {
    return <div>Unauthorized Access</div>;
  } else {
    return (
      <div>
        <h2>Welcome to Student Dashboard</h2>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }
};

export default StudentDashboard;
