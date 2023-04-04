import React from "react";
import "../SignIn/SignIn.css";
import { AiOutlineClose } from "react-icons/ai";

const SignIn = ({ setModalOpen }) => {
  const signinBtn = document.querySelector("#signinBtn");

  return (
    <div class="modal">
      <div class="form-box">
        <h1 id="title">Đăng kí</h1>
        <form action="">
          <div class="input-group">
            <div class="input-field" id="nameField">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Name" />
            </div>

            <div class="input-field">
              <i class="fas fa-envelope"></i>
              <input type="email" placeholder="email" />
            </div>

            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="password" />
            </div>

            <p>
              Quên mật khẩu? <a href="#">Nhấn vào đây</a>
            </p>
          </div>

          <div class="btn-field">
            <span type="button" id="signupBtn">
              Đăng kí
            </span>
          </div>
        </form>
        <div class="form-close">
          <AiOutlineClose
            onClick={() => {
              setModalOpen(false);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
