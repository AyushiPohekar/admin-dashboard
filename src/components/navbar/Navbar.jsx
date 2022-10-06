import React,{useContext} from "react";
import "./navbar.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../context/darkModeContext";

const Navbar = () => {
  const {dispatch} =useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search Here" />
          <SearchOutlinedIcon className="icons" />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icons" />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className="icons DARK" onClick={()=>dispatch({type:"TOGGLE"})}/>
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icons" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icons" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icons" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icons" />
          </div>
          <div className="item">
            <img
              src="https://img.freepik.com/premium-vector/woman-profile-cartoon_18591-58480.jpg"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
