import React from "react";
import logo from '../assets/images/logo-horizontal-white.png'
import Sidebar from "../shared/components/Sidebar";

const AdminDash = () => {
  return (
    <div>
      <Sidebar/>
      <div className="right-sidebar">
        <h1>Birthday Boy</h1>  
      </div>
    </div>
  );
};

export default AdminDash;
