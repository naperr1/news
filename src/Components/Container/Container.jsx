import React from "react";
import "./Container.css";
import { content } from "../../utils/content";
import { Link } from "react-router-dom";

const Container = () => {
  return (
    <div className="content">
      {content?.map((item, index) => (
        <div className="box">
          <div className="image">
            <img src={item.image} alt="" />
          </div>
          <div className="text">
            <Link to={"/blog"} className="title">
              {item.title}
            </Link>
            <div className="category">
              <span>{item.category}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Container;
