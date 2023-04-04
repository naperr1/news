import React from "react";
import "../ContentNews/ContentNews.css";
import { Link } from "react-router-dom";
import { contentNews } from "../../utils/ContentNews";
import { FiArrowRight } from "react-icons/fi";
import { tag } from "../../utils/tag";

const ContentNews = () => {
  return (
    <div className="contentNews">
      <div className="contentNews_left">
        <div className="contentNews_title">
          <h3>Bài báo mới nhất</h3>
        </div>
        <div className="contentNews_body">
          {contentNews.map((item) => (
            <div className="contentNews_body-box">
              <div className="contentNews_body-box1">
                <img src={item.image} alt="" />
              </div>
              <div className="contentNews_body-box2">
                <div>
                  <Link to={item.title.link}>{item.title.name}</Link>
                </div>
                <Link to={item.category.link}>{item.category.name}</Link>
                <span> - {item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="contentNews_right">
        <div className="contentNews_title">
          <h3>Tin tức nổi bật</h3>
        </div>
        <div className="contentNews_right-box1"></div>
        <div className="contentNews_right-box2">
          <h1>Đăng kí</h1>
          <span>Những tin tức súc tích, dễ hiểu & hoàn toàn miễn phí</span>
          <input type="text" placeholder="Email" />
          <FiArrowRight className="contentNews_right-icon" />
        </div>
        <div className="contentNews_right-box3">
          <div className="contentNews_title">
            <h3>Tags</h3>
          </div>
          <div className="contentNews_right-tag">
            {tag.map((item) => (
              <Link to={item.link}>{item.name}</Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentNews;
