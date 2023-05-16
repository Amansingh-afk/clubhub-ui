import React, { useEffect, useState } from "react";

import useAuth from "../../utils/UseAuth";
import Header from "./header/Header";
import Sidebar from "./sidenavbar/Sidebar";
import Spinner from "../Common/Spinner";
import Toast from "../../utils/Toast";

const Layout = ({ children }) => {
  const { user, isLoading } = useAuth();
  const [isMenuExpanded, setIsMenuExpanded] = useState(
    localStorage.getItem("isMenuExpanded") === "true"
  );

  const handleMenuToggle = () => {
    setIsMenuExpanded(!isMenuExpanded);
    localStorage.setItem("isMenuExpanded", !isMenuExpanded);
  };

  if (isLoading) {
    return <Spinner />;
  }

  const isAdmin = user.role === "admin";
  const isStudent = user.role === "student";

  return (
    <div className="container-fluid">
      <div className="row">
        <div className={isMenuExpanded ? "col-lg-2 col-md-3" : "col-lg-1"}>
          <Sidebar
            isAdmin={isAdmin}
            isStudent={isStudent}
            isMenuExpanded={isMenuExpanded}
            onMenuToggle={handleMenuToggle}
          />
        </div>
        <div className={isMenuExpanded ? "col-lg-10 col-md-9" : "col-lg-11"}>
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
