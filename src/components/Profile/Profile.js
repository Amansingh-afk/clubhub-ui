import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import UserDetails from "./UserDetails";
import Password from "./Password";

const Profile = () => {
  const [activeTab, setActiveTab] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash === "#v-tabs-profile") {
      setActiveTab(1);
    } else if (hash === "#v-tabs-messages") {
      setActiveTab(2);
    } else {
      setActiveTab(0);
    }
  }, [location]);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="row w-100">
        <div className="col-3">
          {/* Tab navs */}
          <div
            className="nav flex-column nav-tabs text-center"
            id="v-tabs-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <a
              className={`nav-link ${
                activeTab === 0 ? "active" : ""
              } text-dark`}
              id="v-tabs-home-tab"
              data-mdb-toggle="tab"
              href="#v-tabs-home"
              role="tab"
              aria-controls="v-tabs-home"
              aria-selected={activeTab === 0}
              onClick={() => handleTabClick(0)}
            >
              Profile Settings
            </a>
            <a
              className={`nav-link ${
                activeTab === 1 ? "active" : ""
              } text-dark`}
              id="v-tabs-profile-tab"
              data-mdb-toggle="tab"
              href="#v-tabs-profile"
              role="tab"
              aria-controls="v-tabs-profile"
              aria-selected={activeTab === 1}
              onClick={() => handleTabClick(1)}
            >
              Password
            </a>
            <a
              className={`nav-link ${
                activeTab === 2 ? "active" : ""
              } text-dark`}
              id="v-tabs-messages-tab"
              data-mdb-toggle="tab"
              href="#v-tabs-messages"
              role="tab"
              aria-controls="v-tabs-messages"
              aria-selected={activeTab === 2}
              onClick={() => handleTabClick(2)}
            >
              Delete Account
            </a>
          </div>
          {/* Tab navs */}
        </div>

        <div className="col-9">
          {/* Tab content */}
          <div className="tab-content" id="v-tabs-tabContent">
            <div
              className={`tab-pane fade ${
                activeTab === 0 ? "show active" : ""
              }`}
              id="v-tabs-home"
              role="tabpanel"
              aria-labelledby="v-tabs-home-tab"
            >
              <UserDetails />
            </div>
            <div
              className={`tab-pane fade ${
                activeTab === 1 ? "show active" : ""
              }`}
              id="v-tabs-profile"
              role="tabpanel"
              aria-labelledby="v-tabs-profile-tab"
            >
              <Password />
            </div>
            <div
              className={`tab-pane fade ${
                activeTab === 2 ? "show active" : ""
              }`}
              id="v-tabs-messages"
              role="tabpanel"
              aria-labelledby="v-tabs-messages-tab"
            >
              <div className="container p-3">
                <button className="btn btn-danger shadow w-25">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
