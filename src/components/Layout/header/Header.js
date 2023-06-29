import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import useAuth from "../../../utils/UseAuth";

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
          className="navbar-toggler btn-light"
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
          <div className="search-wrapper my-4 mt-md-0">
            <input className="search-input" type="text" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-search"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="M21 21l-4.35-4.35"></path>
            </svg>
          </div>
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
                <i className="bx bx-calendar-event"></i>
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
            <a className="text-reset me-3 dropdown-toggle">
              <span className="badge rounded-pill badge-notification bg-danger">
                1
              </span>
            </a>
          </div>
          <div className="dropdown">
            <a
              className="dropdown-toggle d-flex align-items-center hidden-arrow"
              href="#"
              id="navbarDropdownMenuAvatar"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded={isDropdownOpen}
              onClick={toggleUserDropdown}
            >
              <img
                src={user.avatar.url || "https://www.pngarts.com/files/10/Default-Profile-Picture-Download-PNG-Image.png"}
                onError={(e) => {
                  e.target.src = "https://www.pngarts.com/files/10/Default-Profile-Picture-Download-PNG-Image.png";
                }}
                className="rounded-circle"
                height="40"
                alt="profile logo"
                loading="lazy"
              />
            </a>
            <ul
              className={`dropdown-menu dropdown-menu-end ${
                isDropdownOpen ? "show" : ""
              }`}
              aria-labelledby="navbarDropdownMenuAvatar"
            >
              <li>
                <a className="dropdown-item" href="#">
                  My profile
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#" onClick={logout}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
