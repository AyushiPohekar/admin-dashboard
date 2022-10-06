import React from "react";
import './sidebar.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import {Link} from "react-router-dom";
import Inventory2Icon from '@mui/icons-material/Inventory2';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import GradingIcon from '@mui/icons-material/Grading';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to='/' style={{textDecoration:"none"}}>
        <span className="logo">sb-admin-2</span>
        </Link>
      
      </div>
      <hr/>
      <div className="center">
        <ul>
            <p className="title">MAIN</p>
            <Link to='/' style={{textDecoration:"none"}}>
          <li>
            <DashboardIcon className='icon'/>
            <span>Dashboard</span>
          </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to='/users' style={{textDecoration:"none"}}>
          <li>
            <PersonOutlineOutlinedIcon className='icon'/>
            <span>Users</span>
          </li>
          </Link>
          <Link to='/products' style={{textDecoration:"none"}}>
          <li>
            <Inventory2Icon className='icon'/>
            <span>Products</span>
          </li>
          </Link>
          <li>

            <GradingIcon className='icon'/>
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingOutlinedIcon className='icon'/>
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p> 
          <li>
            <AssessmentIcon className='icon'/>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsActiveOutlinedIcon className='icon'/>
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <HealthAndSafetyOutlinedIcon className='icon'/>
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className='icon'/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className='icon'/>
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className='icon'/>
            <span>Profile</span>
          </li>
          <li>
            <LogoutOutlinedIcon className='icon'/>
            <span>Log Out</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
       
      </div>
    </div>
  );
};

export default Sidebar;
