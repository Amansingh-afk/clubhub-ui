import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import useAuth from "../../../utils/UseAuth";
function Header() {
  const navigate = useNavigate();
  const { user, isLoading } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  if (isLoading) {
    return <div>Loading...</div>;
  }
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent rounded m-2">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <form className="form-inline">
            <div className="search-wrapper">
              <input
                className="search-input"
                type="text"
                placeholder="Search"
              />
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
          </form>
        </li>
      </ul>
      <ul className="navbar-nav left-nav">
        <li className="nav-item">
          <a className="nav-link header-profile text-center" href="#">
            <i className="bx bx-bell bx-fw "></i>
          </a>
        </li>
        <li className="dropdown">
          <button
            className="btn btn-transparent dropdown-toggle header-profile"
            type="button"
            onClick={toggleDropdown}
          >
            <i className="bx bx-user bx-fw"></i> {user.name}
          </button>
          {isDropdownOpen && (
            <div className="dropdown-menu text-dark p-0 show">
              <a className="dropdown-item px-2" type="button">
                Profile
              </a>
              <a className="dropdown-item px-2" type="button">
                Settings
              </a>
              <a className="dropdown-item px-2" type="button" onClick={logout}>
                Logout
              </a>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Header;
