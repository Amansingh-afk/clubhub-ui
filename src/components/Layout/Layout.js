import React from "react";

import Header from "./header/Header";
import Sidebar from "./sidenavbar/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2 col-md-3">
          <Sidebar />
        </div>
        <div className="col-lg-10 col-md-9">
          <Header />
          <main className="container-fluid my-4 py-2 shadow rounded bg-white">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
