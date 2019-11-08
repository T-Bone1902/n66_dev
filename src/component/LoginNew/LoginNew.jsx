import React from "react";
import { Container, Row, Col, Card, Form } from 'react-bootstrap';

//IMAGE SVG
import { ReactComponent as Logo } from "./img/logo.svg";
//CSS
// import "../Login/login.css";
import "./LoginNew.css";

class LoginNew extends React.Component {
    componentDidMount() {
        // let signIn = document.querySelector('.signIn');
        // let img = document.querySelector('.img');
        // let mountainBg = document.querySelector('.mountainBg');

        // signIn.addEventListener('click', ()=>{
        //     console.log('aaaa');
        //     signIn.style.transform = "translate3d(350px, 0, 0)";
        //     img.style.transform = "translate3d(-610px, 0, 0)";
        //     mountainBg.style.transform = "translate3d(610px, 0, 0)";
        // })
    }

    render() {
        return (
            <Container className="cont">
                <Row>
                    
                    <div className="signIn">
                        <div className="logo">
                            <Logo />
                        </div>
                        <div>
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
                        </div>
                    </div>
                    <div className="registered">
                        <div className="mountainBg"></div>
                        <form className="sub-cont" method="">
                            <div className="img">
                                <div className="__text m--up">
                                    <h2>加入</h2>
                                    <p>探索更多旅程</p>
                                </div>
                                <div className="__text m--in">
                                    <h2>發現</h2>
                                    <p>獨一無二的冒險</p>
                                </div>
                                <div className="__btn">
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

                </Row>
            </Container>
        );
    }
}

export default LoginNew;