import React, { useState } from "react";

import useAuth from "../../utils/UseAuth";
import Header from "./Header";
import Sidebar from "./sidenavbar/Sidebar";
import Spinner from "../Common/Spinner";

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
        <div className={isMenuExpanded ? "col-lg-10 col-md-9" : "col-lg-11 p-0"}>
          <Header isAdmin={isAdmin} isStudent={isStudent} />
          <main className="container-fluid my-2 py-2 shadow rounded bg-white">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
