import React from "react";
import { Container, Row, Col, Card, Form } from 'react-bootstrap';

//IMAGE SVG
import { ReactComponent as Logo } from "./img/logo.svg";
//CSS
// import "../Login/login.css";
import "./LoginNew.css";

class LoginNew extends React.Component {
    componentDidMount() {
        
        // let img = document.querySelector('.img');
        // let mountainBg = document.querySelector('.mountainBg');

        // signIn.addEventListener('click', ()=>{
        //     console.log('aaaa');
        //     signIn.style.transform = "translate3d(350px, 0, 0)";
        //     img.style.transform = "translate3d(-610px, 0, 0)";
        //     mountainBg.style.transform = "translate3d(610px, 0, 0)";
        // })
        let signIn = document.querySelector('.signIn');
        let registered = document.querySelector('.registered');
        let mountainBg = document.querySelector('.mountainBg');

        let img = document.querySelector('.img');
        let signInForm = document.querySelector('.sign-in');
        let signUpForm = document.querySelector('.sign-up');
        let signUpBtn = document.querySelector('.__btn');
        signUpBtn.addEventListener('click', ()=>{
            registered.style.transform = 'translate(-610px, 0)';
            mountainBg.style.transform = 'translate(610px, 0)'
            signIn.style.transform ='translate(350px, 0)';
            signInForm.style.opacity = '0';
            signUpForm.style.top = '0';
            // img.style.pointerEvents = 'none';
        })
    }

    render() {
        return (
            <Container className="cont">
                <Row>
                    <div className="signIn">
                        <div className="logo">
                            <Logo />
                        </div>
                        <div className="position-relative">
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

                            <form className="form sign-up" method="">
                                <div className=" ">
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
                    </div>
                    <div className="registered">
                        <div className="mountainBg"></div>
                        <div className="sub-cont" >
                            <div className="img">
                                <div className="inner">
                                    <div className="__text m--up">
                                        <h2>加入</h2>
                                        <p>探索更多旅程</p>
                                    </div>
                                    <div className="__text m--in">
                                        <h2>發現</h2>
                                        <p>獨一無二的冒險</p>
                                    </div>
                                </div>

                                <div className="__btn">
                                    <a href="#2" role="button" className="m--up">註冊</a>
                                    <a href="#3" role="button" className="m--in">登入</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        );
    }
}

export default LoginNew;