import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Login = ({ setLogIn }) => {
  return (
    <div>
      <div class="modal">
        <div class="form-box">
          <h1 id="title">Đăng nhập</h1>
          <form action="">
            <div class="input-group">
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
                Đăng nhập
              </span>
            </div>
          </form>
          <div class="form-close">
            <AiOutlineClose
              onClick={() => {
                setLogIn(false);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
