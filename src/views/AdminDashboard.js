import { Navigate } from "react-router-dom";

import useAuth from "../hooks/UseAuth";

import UnAuthorized from "../components/Common/UnAuthorized";
import Sidebar from "../components/Layout/sidenavbar/Sidebar";
import Header from "../components/Layout/header/Header";
const AdminDashboard = () => {
  const { isAuthenticated, role, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  } else if (role !== "admin") {
    return <UnAuthorized />;
  } else {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-md-3">
            <Sidebar />
          </div>
          <div className="col-lg-9 col-md-9">
            <Header />
            <div className="container-fluid">
              <div className="row ms-2">
                <div className="col">
                  <h2>Welcome to Student Dashboard</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default AdminDashboard;
