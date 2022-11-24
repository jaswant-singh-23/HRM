import React from "react";


const Sidebar = () => {
  const toggleSidebar = () => document.body.classList.toggle("open")

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
          <span className="text-white">Menu</span>

        </header>
        <nav className="sidebar_nav">
          <button type="button">
            <i className="fa-solid fa-house" />
            <span style={{ animationDelay: '.5s' }} title="Home">Home</span>
          </button>
          <button type="button">
            <i className="fa-solid fa-gear"></i>
            <span style={{ animationDelay: '.4s' }} title="Settings">Settings</span>
          </button>
          <button type="button">
            <i className="fa-solid fa-layer-group"></i>
            <span style={{ animationDelay: '.3s' }} title="Level">Level</span>
          </button>
          <button type="button">
            <i className="fa-solid fa-user"></i>
            <span style={{ animationDelay: '.2s' }} title="Accounts">Accounts</span>
          </button>
        </nav>
        <footer className="sidebar_footer">
          <button type="button">
            <i className="fa-solid fa-lock"></i>
            <span style={{ animationDelay: '.1s' }} title="Logout">Logout</span>
          </button>
        </footer>
      </div>
    </aside>

  )
}
export default Sidebar