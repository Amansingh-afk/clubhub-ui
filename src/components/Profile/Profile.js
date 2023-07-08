import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import UserDetails from "./UserDetails";
import Password from "./Password";
import { deleteAccount } from "../../utils/api";
import { toast } from "react-toastify";

const Profile = () => {
  const navigate = useNavigate();
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

  const handleDeleteAccount = async () => {
    try {
      await deleteAccount();
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/login", { replace: true });  
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <>
      <div className="row w-100">
        <div className="col-12">
          <div
            className="nav nav-tabs text-center row"
            id="v-tabs-tab"
            role="tablist"
            aria-orientation="horizontal"
          >
            <Link
              className={`nav-link col-4 col-md-3 ${
                activeTab === 0 ? "active bg-dark text-white" : "text-dark"
              }`}
              id="v-tabs-home-tab"
              data-mdb-toggle="tab"
              to="#v-tabs-home"
              role="tab"
              aria-controls="v-tabs-home"
              aria-selected={activeTab === 0}
              onClick={() => handleTabClick(0)}
            >
              Profile Settings
            </Link>
            <Link
              className={`nav-link col-4 col-md-3 ${
                activeTab === 1 ? "active bg-dark text-white" : "text-dark"
              }`}
              id="v-tabs-profile-tab"
              data-mdb-toggle="tab"
              to="#v-tabs-profile"
              role="tab"
              aria-controls="v-tabs-profile"
              aria-selected={activeTab === 1}
              onClick={() => handleTabClick(1)}
            >
              Password
            </Link>
            <Link
              className={`nav-link col-4 col-md-3  ${
                activeTab === 2 ? "active bg-dark text-white" : "text-dark"
              }`}
              id="v-tabs-messages-tab"
              data-mdb-toggle="tab"
              to="#v-tabs-messages"
              role="tab"
              aria-controls="v-tabs-messages"
              aria-selected={activeTab === 2}
              onClick={() => handleTabClick(2)}
            >
              Delete Account
            </Link>
          </div>
        </div>

        <div className="col-12">
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
                This is a one time action. Your account will be deleted forever.{" "}
                <br />
                <button
                  className="btn btn-danger shadow w-md-25 mt-2"
                  onClick={handleDeleteAccount}
                >
                  <i className="bx bx-trash"></i> {"  "}
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
