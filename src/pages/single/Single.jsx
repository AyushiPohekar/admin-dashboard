import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from '../../components/charts/Chart';
import BasicTable from "../../components/table/Table";
import "./single.css";
import React from "react";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="singletop">
          <div className="singleleft">
            <div className="editButton">
                Edit
            </div>
            <h1 className="singletitle">Information</h1>
            <div className="singleitem">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="singleitemimg"
              />
              <div className="singledetails">
                <div className="singleitemTitle">
                    Jane Doe
                </div>
                <div className="singledetailItem">
                    <span className="singleitemKey">Email:</span>
                    <span className="singleitemValue">janedoe@gmail.com</span>
                </div>
                <div className="singledetailItem">
                    <span className="singleitemKey">Phone:</span>
                    <span className="singleitemValue">767898090</span>
                </div>
                <div className="singledetailItem">
                    <span className="singleitemKey">Address:</span>
                    <span className="singleitemValue">chennai</span>
                </div>
                <div className="singledetailItem">
                    <span className="singleitemKey">Country</span>
                    <span className="singleitemValue">India</span>
                </div>
              </div>
            </div>
          </div>
          <div className="singleright">
            <Chart aspect={3/1} title='User Spending (Last 6 Months)'/>
          </div>
        </div>
        <div className="singlebottom">
        <h1 className="singletitle">Last Transactions</h1>
            <BasicTable/>
        </div>
      </div>
    </div>
  );
};

export default Single;
