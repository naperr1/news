import React from "react";
import { Link } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
import { useState } from "react";

const Nav = ({ title, link, child }) => {
  const [showIndex, setShowIndex] = useState(0);
  return (
    <>
      <Link to={link}>
        {title}
        <BiChevronDown class="icons" />
      </Link>
      <div className="sub_menu">
        <div className="sub_menu-sidebar">
          {child?.map((item, index) => (
            <Link
              onMouseOver={() => {
                setShowIndex(index);
              }}
              to={item.link}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="sub_menu-info">
          {child[showIndex].items?.map((item) => (
            <div className="sub_menu-info-item">
              <img src={item.image}></img>
              <div>
                <Link to={item.link}>
                  <h4>{item.title}</h4>
                </Link>
                <div className="sub_menu-info-title">
                  <h5>{item.category} - </h5>
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Nav;
