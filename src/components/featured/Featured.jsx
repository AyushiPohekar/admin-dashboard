import React from "react";
import "./featured.css";
import MoreVertIcon from "@mui/icons-material/MoreVertOutlined";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";


const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredtop">
        <h3 className="featuredtitle">Total Revenue</h3>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="featuredbottom">
        <div className="featuredchart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="featuredbottomtitle">Total sales made today</p>
        <p className="featuredbottomamount">$420</p>
        <p className="featuredbottomdesc">
          Previous transactions processing.Last payments may not be included.
        </p>
        <div className="featuredsummary">
          <div className="featureditem">
            <div className="featureditemTitle">Target</div>
            <div className="featureditemResult negative">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="featuredresultAmount">$12k</div>
            </div>
          </div>

          <div className="featureditem">
            <div className="featureditemTitle">Last Week</div>
            <div className="featureditemResult positive">
              <KeyboardArrowUpIcon fontSize="small" />
              <div className="featuredresultAmount">$12k</div>
            </div>
          </div>

          <div className="featureditem">
            <div className="featureditemTitle">Last Month</div>
            <div className="featureditemResult positive">
              <KeyboardArrowUpIcon fontSize="small" />
              <div className="featuredresultAmount">$12k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
