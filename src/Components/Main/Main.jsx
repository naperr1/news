import React from "react";
import MainLeft from "../mainHeader/MainLeft";
import { main } from "../../utils/main";
import "../Main/Main.css";
import { mainRight } from "../../utils/mainRight";
import "../Main/MainRight.css";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTwitterSquare, AiFillYoutube } from "react-icons/ai";

const Main = () => {
  return (
    <>
      <div className="main">
        <div className="main_left">
          {main.map((item, index) => (
            <MainLeft title={item.title} child={item.child} />
          ))}
        </div>
        <div className="main_right">
          <div className="main_right-header">
            <h5>Mới nhất</h5>
          </div>
          {mainRight.map((item) => (
            <div className="main_right-item">
              <div className="main_right-box">
                <span>{item.id}</span>
              </div>
              <a href={item.link}>{item.title}</a>
            </div>
          ))}
          <div className="main_right-img">
            <img
              src="https://preview.colorlib.com/theme/magnews2/images/banner-02.jpg"
              alt=""
              srcset=""
            />
          </div>
          <div className="main_right-social">
            <div className="main_right-social-title">
              <h5>Liên hệ</h5>
            </div>
            <div className="main_right-social-body">
              <div className="main_right-social-item">
                <div className="main_right-social-box">
                  <FaFacebookSquare />
                  <h5>6789 Fans</h5>
                </div>
                <div>
                  <a href="#">
                    <h6>LIKE</h6>
                  </a>
                </div>
              </div>

              <div className="main_right-social-item">
                <div className="main_right-social-box">
                  <AiFillTwitterSquare className="twitter" />
                  <h5>6789 Fans</h5>
                </div>
                <a href="#">
                  <h6>FOLLOW</h6>
                </a>
              </div>

              <div className="main_right-social-item">
                <div className="main_right-social-box">
                  <AiFillYoutube className="youtube" />
                  <h5>6789 Fans</h5>
                </div>
                <div>
                  <a href="#">
                    <h6>SUBSCRIBE</h6>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
