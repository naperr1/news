import React from "react";
import "./ScrollHeader.css";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";

const ScrollHeader = () => {
  const [news, setNews] = useState([
    "Kết quả Đan Mạch 0-0 Tunisia, World Cup 2022: Chia điểm chất lượng cao",
    "Messi sau trận thua tuyển Ả Rập Xê Út: 'Không có lời bào chữa nào hết!'",
    "Người giúp việc ở TP.HCM òa khóc khi được cả công ty tổ chức tiệc chia tay",
    "Kết quả Đan Mạch 0-0 Tunisia, World Cup 2022: Chia điểm chất lượng cao",
  ]);
  return (
    <div className="header">
      <div className="header_trending">
        {/* <div className="header_trending-h5">
        </div> */}
        <h5>TRENDING NOW:</h5>
        <div className="span">
          <span>
            {news[0]}
            <br />
            {news[1]}
            <br />
            {news[2]}
            <br />
            {news[3]}
          </span>
        </div>
      </div>
      <div className="header_search">
        <input type="text" placeholder="Search" />
        <AiOutlineSearch className="header_search-icon" />
      </div>
    </div>
  );
};

export default ScrollHeader;
