import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AuthService from "../../services/auth.service";
import userService from "../../services/user.service";

const Sidebar = () => {
  const [userField, setUserField] = useState({});
  const toggleSidebar = () => document.body.classList.toggle("open");
  const router = useLocation();
  const pathname = router.pathname;

  const [active, setActive] = useState("");

  useEffect(() => {
    const user = AuthService.getCurrentUser();
  }, []);
  useEffect(() => {
    if (pathname) {
      if (pathname == "/leave") {
        setActive("leave");
      } else if (pathname == "/leave-management") {
        setActive("leaveManagement");
      } else if (pathname == "/profile") {
        setActive("profile");
      } else if (pathname == "/home") {
        setActive("home");
      } else {
        setActive("home");
      }
    }
  }, [pathname]);
  useEffect(() => {
    userService
      .getProfileById()
      .then((response) => {
        setUserField(response.data.data);
      })
      .catch((error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      });
  }, [])
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
          {
            userField.teamleader == true ? (

              <div className={`nav-links ${active == "leaveManagement" ? `active` : ""}`}>
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
            ) : (
              <div className={`nav-links ${active == "home" ? `active` : ""}`}>
                <Link to="/home" className="text-decoration-none">
                  <button type="button">
                    <i className="fa-solid fa-house" />
                    <span style={{ animationDelay: ".5s" }} title="Home">
                      Home
                    </span>
                  </button>
                </Link>
              </div>
            )
          }
          <div className={`nav-links ${active == "profile" ? `active` : ""}`}>
            <Link to="/profile" className="text-decoration-none">
              <button type="button">
                <i className="fa-solid fa-user"></i>
                <span style={{ animationDelay: ".2s" }} title="Profile">
                  Profile
                </span>
              </button>
            </Link>
          </div>

          <div className={`nav-links ${active == "leave" ? `active` : ""}`}>
            <Link to="/leave" className="text-decoration-none">
              <button type="button">
                <i className="fa-solid fa-layer-group"></i>
                <span
                  style={{ animationDelay: ".4s" }}
                  title="Leave Management"
                  className="text-nowrap"
                >
                  Leave
                </span>
              </button>
            </Link>
          </div>

          <div>
            {" "}
            <Link className="text-decoration-none">
              <button type="button">
                <i className="fa-solid fa-gear"></i>
                <span style={{ animationDelay: ".3s" }} title="Settings">
                  Settings
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
