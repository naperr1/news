import React from "react";
import "./Head.css";
import { FaBars } from "react-icons/fa";

const Head = ({ setMobile, mobile }) => {
  return (
    <div className="head">
      <div className="head_logo">
        <a href="/" className="h1">
          VNEWS
        </a>
      </div>

      <div className="head_banner">
        <img
          src="https://preview.colorlib.com/theme/magnews2/images/banner-01.jpg"
          alt=""
        />
      </div>

      <div className="head_icon">
        <FaBars className="icon" onClick={() => setMobile(!mobile)} />
      </div>
    </div>
  );
};

export default Head;
