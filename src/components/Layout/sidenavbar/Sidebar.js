import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ isAdmin }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [active, setActive] = useState("");

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  const handleMenuClick = (event, title) => {
    // event.preventDefault();
    setActive(title);
  };

  const menuIconClass = isExpanded ? "bx-menu-alt-right" : "bx-menu";

  return (
    <section className={`sidebar ${isExpanded ? "expand" : ""}`}>
      <div className="nav-header">
        <p className="logo">~ClubHub~</p>
        <i className={`bx ${menuIconClass} btn-menu`} onClick={toggleMenu}></i>
      </div>
      <ul className="nav-links">
        <li className={active === "Home" ? "active" : ""}>
          <Link
            to={isAdmin ? "/admin" : "/student"}
            onClick={(e) => handleMenuClick(e, "Home")}
          >
            <i className="bx bx-home-alt-2"></i>
            <span className="title">Home</span>
          </Link>
          <span className="tooltip">Home</span>
        </li>
        <li className={active === "Clubs" ? "active" : ""}>
          <Link to="/club" onClick={(e) => handleMenuClick(e, "Clubs")}>
            <i className="bx bx-group"></i>
            <span className="title">Clubs</span>
          </Link>
          <span className="tooltip">Clubs</span>
        </li>
        <li className={active === "Events" ? "active" : ""}>
          <Link to="/event" onClick={(e) => handleMenuClick(e, "Events")}>
            <i className="bx bx-calendar-event"></i>{" "}
            <span className="title">Events</span>
          </Link>
          <span className="tooltip">Events</span>
        </li>
        <li className={active === "Profile" ? "active" : ""}>
          <Link to="/profile" onClick={(e) => handleMenuClick(e, "Profile")}>
            <i className="bx bx-user"></i>
            <span className="title">Profile</span>
          </Link>
          <span className="tooltip">Profile</span>
        </li>
        <li className={active === "Setting" ? "active" : ""}>
          <a href="#" onClick={(e) => handleMenuClick(e, "Setting")}>
            <i className="bx bx-cog"></i>
            <span className="title">Setting</span>
          </a>
          <span className="tooltip">Setting</span>
        </li>
      </ul>
    </section>
  );
};

export default Sidebar;
