import React from "react";
import "../Footer/Footer.css";
import { Link } from "react-router-dom";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { TfiTwitter } from "react-icons/tfi";
import { AiFillYoutube } from "react-icons/ai";
import { footer } from "../../utils/footer";
import { menuHeader } from "../../utils/menuHeader";
import { footerCategory } from "../../utils/footerCategory";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_box">
        <div className="footer_box1">
          <div>
            <h1>VNEWS</h1>
          </div>
          <div style={{ height: "140px" }}>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              tempor magna eget elit efficitur, at accumsan sem placerat. Nulla
              tellus libero, mattis nec molestie at, facilisis ut turpis.
              Vestibulum dolor metus, tincidunt eget odio
            </span>
            <span>Any questions? Call us on (+84) 123456789</span>
          </div>
          <div className="footer_box1-icon">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <TfiTwitter />
            </a>
            <a href="#">
              <FaPinterestP />
            </a>
            <a href="#">
              <AiFillYoutube />
            </a>
          </div>
        </div>
        <div className="footer_box2">
          <h3>Liên kết hữu ích</h3>
          {footer.map((item) => (
            <div className="footer_box2-content">
              <Link to={item.link}>{item.name}</Link>
            </div>
          ))}
        </div>
        <div className="footer_box3">
          <h3>Chủ đề</h3>
          {footerCategory.map((item) => (
            <div className="footer_box3-content">
              <Link to={item.link}> {item.name}</Link>
            </div>
          ))}
        </div>
        <div className="footer_box4">
          <h3>Đăng ký nhận bản tin hàng ngày</h3>
          <div className="footer_box4-content">
            <span>Những tin tức súc tích, dễ hiểu & hoàn toàn miễn phí</span>
          </div>
          <div className="footer_box4-input">
            <input type="text" name="" id="" placeholder="Enter to Email" />
          </div>
          <div className="footer_box4-button">
            <span className="box4-button">Đăng kí</span>
          </div>
        </div>
      </div>
      <div className="footer_copyright">
        Copyright © 2022 by <a href="#">Team 11</a>
      </div>
    </div>
  );
};

export default Footer;
