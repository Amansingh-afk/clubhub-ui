import React from "react";

import useAuth from "../../utils/UseAuth";
import Header from "./header/Header";
import Sidebar from "./sidenavbar/Sidebar";
import Toast from "../../utils/Toast";

const Layout = ({ children }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    // Render loading state or placeholder
    return <div>Loading...</div>;
  }

  const isAdmin = user.role === "admin";
  const isStudent = user.role === "student";

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2 col-md-3">
          <Sidebar isAdmin={isAdmin} isStudent={isStudent} />
        </div>
        <div className="col-lg-10 col-md-9">
          <Header />
          <main className="container-fluid my-4 py-2 shadow rounded bg-white">
            {children}
          </main>
          <Toast />
        </div>
      </div>
    </div>
  );
};

export default Layout;
