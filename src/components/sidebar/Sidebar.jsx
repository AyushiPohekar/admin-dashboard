import React from "react";
import './sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">sb-admin-2</span>
      </div>
      <hr/>
      <div className="center">
        <ul>
          <li>
            <span>Dashboard</span>
          </li>
          <li>
            <span>Dashboard</span>
          </li>
          <li>
            <span>Dashboard</span>
          </li>
          <li>
            <span>Dashboard</span>
          </li>
        </ul>
      </div>
      <div className="bottom">color options</div>
    </div>
  );
};

export default Sidebar;
