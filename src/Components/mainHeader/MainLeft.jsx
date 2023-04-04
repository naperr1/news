import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";
import { main } from "../../utils/main";

const MainLeft = ({ title, child }) => {
  const [news, setNews] = useState(0);
  return (
    <>
      <div className="main_body">
        <div style={{ display: "flex" }}>
          {child.map((item) => (
            <h5>{item.name2}</h5>
          ))}
          <div className="main_span">
            {child.map((item, index) => (
              <span
                onClick={() => {
                  setNews(index);
                }}
              >
                {item.name}
              </span>
            ))}
          </div>
        </div>
        <div className="main_viewall">
          <Link href="#">
            View all
            <AiFillCaretRight className="view_icon" />
          </Link>
        </div>
      </div>

      <div className="main_content">
        {child[news].items.map((item) => {
          return (
            <div className="main_content-box">
              <img src={item.image} alt="" />
              <div className="main_content-text">
                <Link to={item.link}>{item.title}</Link>
                <div className="main_content-title">
                  <Link to={item.link}>{item.category}</Link>
                  <span> - {item.date}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MainLeft;
