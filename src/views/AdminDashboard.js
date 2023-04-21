import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import useAuth from "../hooks/UseAuth";

import UnAuthorized from '../components/common/UnAuthorized'
const AdminDashboard = () => {
  const navigate = useNavigate();
  const { isAuthenticated, role, isLoading } = useAuth();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login", { replace: true });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  } else if (role !== "admin") {
    return <UnAuthorized />
  } else {
    return (
      <div>
        <h2>Welcome to Admin Dashboard</h2>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }
};

export default AdminDashboard;
