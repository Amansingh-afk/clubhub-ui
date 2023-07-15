import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../utils/UseAuth";
import Search from "../../Common/Search";

const Header = ({ isAdmin, isStudent }) => {
  const navigate = useNavigate();
  const { isLoading, user } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  const toggleUserDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
  };

  const isMobileScreen = () => {
    return window.innerWidth < 992; // Adjust the breakpoint as needed
  };

  return (
    <nav
      className={`navbar rounded-bottom navbar-expand-lg ${
        isMobileScreen() ? "bg-dark" : ""
      }`}
    >
      <div className="container-fluid">
        <button
          className={`navbar-toggler btn-light ${
            isMobileScreen() ? "bg-light" : ""
          }`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Search />
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-lg-none">
            {" "}
            <li className="nav-item">
              <a
                className="nav-link text-white"
                href={
                  isAdmin ? "/admin" : isStudent ? "/student" : "/super-admin"
                }
              >
                <i className="bx bx-home-alt-2"></i>
                <span className="ms-2 ">Home</span>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link text-white" href="/club">
                <i className="bx bx-group"></i>
                <span className="ms-2">Clubs</span>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link text-white" href="/event">
                <i className="bx bx-customize"></i>
                <span className="ms-2">Events</span>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link text-white" href="/profile">
                <i className="bx bx-user"></i>
                <span className="ms-2">Profile</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="d-flex align-items-center">
          <div>
            <div className="text-reset me-3 dropdown-toggle">
              <span className="badge rounded-pill badge-notification bg-danger">
                1{/* <i className="bx bx-ghost"></i> */}
              </span>
            </div>
          </div>
          <div className="dropdown">
            <Link
              className="dropdown-toggle d-flex align-items-center hidden-arrow"
              href="#"
              id="navbarDropdownMenuAvatar"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded={isDropdownOpen}
              onClick={toggleUserDropdown}
            >
              <img
                src={user?.avatar?.url}
                className="rounded-circle"
                height="40"
                alt="profile logo"
                loading="lazy"
              />
            </Link>
            <ul
              className={`dropdown-menu dropdown-menu-end bg-dark  ${
                isDropdownOpen ? "show" : ""
              }`}
              aria-labelledby="navbarDropdownMenuAvatar"
            >
              <li>
                <Link className="dropdown-item text-light bg-dark" to="/profile">
                <i className="bx bx-user"></i>{" "}
                  My profile
                </Link>
              </li>
              <li>
                <button className="dropdown-item text-light bg-dark" onClick={logout}>
                <i className="bx bx-log-out"></i>{" "}
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
