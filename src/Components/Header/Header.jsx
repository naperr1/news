import React from "react";
import "../Header/Header.css";
import "../../utils/menuHeader";
import { menuHeader } from "../../utils/menuHeader";
import Head from "../Head/Head";
import SignIn from "../SignIn/SignIn";
import { Link } from "react-router-dom";
import { BiChevronDown, BiMobile } from "react-icons/bi";
import Nav from "../NavHeader/Nav";
import Body from "../ScrollHeader/ScrollHeader";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { TfiTwitter } from "react-icons/tfi";
import { AiFillYoutube, AiOutlineClose } from "react-icons/ai";
import "../SignIn/SignIn.css";
import { useState } from "react";
import Login from "../Login/Login";

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [logIn, setLogIn] = useState(false);
  const [mobile, setMobile] = useState(false);

  const icon = document.querySelector(".container");
  const icon_hide = document.querySelector(".icon_hide");

  return (
    <header>
      <section>
        <div className="section_header">
          <div className="section_header-left">
            <div className="section_header-location">Ha Noi, VN</div>
            <div className="section_header-about">
              <Link to={"/"}>About</Link>
            </div>
            <div className="section_header-contact">
              <Link to={"/"}>Contact</Link>
            </div>
            <div className="section_header-signup">
              <span
                onClick={() => {
                  setModalOpen(true);
                }}
              >
                Sign up
              </span>
            </div>
            <div className="section_header-signin">
              <span
                onClick={() => {
                  setLogIn(true);
                }}
              >
                Log in
              </span>
            </div>
          </div>
          <div className="section_header-right">
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
      </section>
      <div className="body">
        <Head setMobile={setMobile} mobile={mobile} />
        {!mobile && (
          <header>
            <div className="container">
              <nav>
                <ul>
                  <li>
                    <Link to="/">Trang chủ</Link>
                  </li>
                  {menuHeader?.map((item) => (
                    <li>
                      <Nav
                        title={item.title}
                        link={item.link}
                        child={item.child}
                      ></Nav>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </header>
        )}
      </div>
      {modalOpen && <SignIn setModalOpen={setModalOpen} />}
      {logIn && <Login setLogIn={setLogIn} />}
    </header>
  );
};

export default Header;
