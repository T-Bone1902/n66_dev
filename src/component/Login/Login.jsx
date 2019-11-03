import React, { Component } from "react";
import { ReactComponent as Logo } from "./img/logo.svg";
import "./login.css";

class Login extends Component {
  componentDidMount() {
    document.querySelector(".img__btn").addEventListener("click", function() {
      document.querySelector(".cont").classList.toggle("s--signup");
      document.querySelector(".logo").classList.toggle("logo-color");
    });
  }

  render() {
    return (
      <div className="cont">
        <Logo    className="logo" />
        <form className="form sign-in" method="">
          <h2>會員登入</h2>
          <label>
            <input type="email" placeholder="電子信箱" />
          </label>
          <label>
            <input type="password" placeholder="密碼" />
          </label>
          <p className="forgot-pass">忘記密碼?</p>
          <button type="submit" className="submit">
            登入
          </button>
        </form>

        <form className="sub-cont" method="">
          <div className="img">
            <div className="img__text m--up">
              <h2>加入</h2>
              <p>探索更多旅程</p>
            </div>
            <div className="img__text m--in">
              <h2>發現</h2>
              <p>獨一無二的冒險</p>
            </div>
            <div className="img__btn">
              <span className="m--up">註冊</span>
              <span className="m--in">登入</span>
            </div>
          </div>
          <div className="form sign-up">
            <h2>會員註冊</h2>
            <label>
              <input type="email" placeholder="電子信箱" />
            </label>
            <label>
              <input type="password" placeholder="密碼" />
            </label>
            <label>
              <input type="password" placeholder="確認密碼" />
            </label>
            <button type="submit" className="submit register">
              註冊
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
