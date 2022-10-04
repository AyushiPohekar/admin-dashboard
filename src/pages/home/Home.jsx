import React from "react";
import Sidebar from '../../components/sidebar/Sidebar';

import "./home.css";

const Home = () => {
  return (
    <div className="home">
     <Sidebar/>
     <div className="homeContainer">container</div>
    </div>
  );
};

export default Home;
