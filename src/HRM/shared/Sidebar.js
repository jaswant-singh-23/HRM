import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AuthService from "../../services/auth.service";

const Sidebar = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  const toggleSidebar = () => document.body.classList.toggle("open");
  const router = useLocation();
  const pathname = router.pathname;

  const [active, setActive] = useState("");

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user.roles.includes("ROLE_USER"));
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);

  useEffect(() => {
    if (pathname) {
      if (pathname == "/leave") {
        setActive("leave");
      } else if (pathname == "/profile") {
        setActive("profile");
      } else if (pathname == "/home") {
        setActive("home");
      } else {
        setActive("home");
      }
    }
  }, [pathname]);
  return (
    <aside className="sidebar">
      <div className="sidebar_inner">
        <header className="sidebar_header">
          <button
            type="button"
            className="sidebar_burger"
            onClick={toggleSidebar}
          >
            <i className="fa-solid fa-bars burger-icon"></i>
          </button>
          <span className="text-white cursor-pointer">Menu</span>
        </header>
        <nav className="sidebar_nav">
          <div className={`nav-links ${active == "home" ? `active` : ""}`}>
            <Link to="/home" className="text-decoration-none">
              <button type="button">
                <i className="fa-solid fa-house" />
                <span style={{ animationDelay: ".5s" }} title="Home">
                  General
                </span>
              </button>
            </Link>
          </div>
          <div className={`nav-links ${active == "profile" ? `active` : ""}`}>
            <Link to="/employee-details" className="text-decoration-none">
              <button type="button">
                <i className="fa-solid fa-user"></i>
                <span
                  style={{ animationDelay: ".2s" }}
                  title="Profile"
                  className="text-nowrap"
                >
                  Employee Details
                </span>
              </button>
            </Link>
          </div>
          <div className={`nav-links ${active == "leave" ? `active` : ""}`}>
            <Link to="/leave-management" className="text-decoration-none">
              <button type="button">
                <i className="fa-solid fa-layer-group"></i>
                <span
                  style={{ animationDelay: ".4s" }}
                  title="Leave Management"
                  className="text-nowrap"
                >
                  Leave Management
                </span>
              </button>
            </Link>
          </div>
          <div>
            <Link to="/inventory-control" className="text-decoration-none">
              <button type="button">
                <i className="fa-solid fa-user"></i>
                <span
                  style={{ animationDelay: ".2s" }}
                  title="Profile"
                  className="text-nowrap"
                >
                  Inventory Control
                </span>
              </button>
            </Link>
          </div>
          <div>
            <Link className="text-decoration-none">
              <button type="button">
                <i className="fa-solid fa-gear"></i>
                <span
                  style={{ animationDelay: ".3s" }}
                  title="Settings"
                  className="text-nowrap"
                >
                  Vacancy and Hiring
                </span>
              </button>
            </Link>
          </div>
          <div>
            <Link className="text-decoration-none">
              <button type="button">
                <i className="fa-solid fa-gear"></i>
                <span
                  style={{ animationDelay: ".3s" }}
                  title="Settings"
                  className="text-nowrap"
                >
                  Employee Welfare
                </span>
              </button>
            </Link>
          </div>
          <div>
            <Link className="text-decoration-none">
              <button type="button">
                <i className="fa-solid fa-gear"></i>
                <span
                  style={{ animationDelay: ".3s" }}
                  title="Settings"
                  className="text-nowrap"
                >
                  Alumni
                </span>
              </button>
            </Link>
          </div>
        </nav>
        <footer className="sidebar_footer">
          <button type="button">
            <i className="fa-solid fa-lock"></i>
            <span style={{ animationDelay: ".1s" }} title="Logout">
              Logout
            </span>
          </button>
        </footer>
      </div>
    </aside>
  );
};
export default Sidebar;
