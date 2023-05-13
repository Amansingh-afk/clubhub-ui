import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ isAdmin, isStudent }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeItem, setActiveItem] = useState("");

  const MENU_ITEMS = [
    {
      title: "Home",
      icon: "bx bx-home-alt-2",
      path: isAdmin ? "/admin" : isStudent ? "/student" : "/super-admin",
    },
    { title: "Clubs", icon: "bx bx-group", path: "/club" },
    { title: "Events", icon: "bx bx-calendar-event", path: "/event" },
    { title: "Profile", icon: "bx bx-user", path: "/profile" },
    { title: "Setting", icon: "bx bx-cog", path: "#" },
  ].filter(
    (item) => isAdmin || isStudent || ["Home", "Clubs"].includes(item.title)
  );

  useEffect(() => {
    const savedActiveItem = localStorage.getItem("active-menu-btn");
    const savedIsExpanded = localStorage.getItem("isMenuExpanded");
    setActiveItem(savedActiveItem);
    setIsExpanded(savedIsExpanded === "true");
  }, []);

  const handleItemClick = (item) => {
    localStorage.setItem("active-menu-btn", item.title);
    localStorage.setItem("isMenuExpanded", isExpanded);
    setActiveItem(item.title);
  };

  const handleMenuToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const menuIconClass = isExpanded ? "bx-menu-alt-right" : "bx-menu";

  return (
    <section className={`sidebar ${isExpanded ? "expand" : ""}`}>
      <div className="nav-header">
        <p className="logo">~ClubHub~</p>
        <i
          className={`bx ${menuIconClass} btn-menu`}
          onClick={handleMenuToggle}
        />
      </div>

      <ul className="nav-links">
        {MENU_ITEMS.map((item) => (
          <li
            key={item.title}
            className={item.title === activeItem ? "active" : ""}
            onClick={() => handleItemClick(item)}
          >
            <Link to={item.path}>
              <i className={item.icon} />
              <span className="title">{item.title}</span>
            </Link>
            <span className="tooltip">{item.title}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Sidebar;
