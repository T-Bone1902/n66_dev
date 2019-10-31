import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./navbar_home.css";
import logo from "./img/logo.svg";
import user_home from "./img/user_home.svg";
import phone from "./img/phone.svg";

class NavBar_Home extends Component {
  render() {
    return (
      <Container>
        <Container className="absolute z-index-top">
          <Navbar className="main-navbar" expand="lg">
            <Navbar.Brand href="#home">
              <img
                src={logo}
                width="75"
                height="75"
                className="d-inline-block align-top"
                alt="logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="navbar-top">
                <Nav.Link href="#home" className="member-nav ">
                  <img
                    src={user_home}
                    width="12"
                    height="12"
                    className="d-inline-block nav-icon"
                    alt="user-home"
                  />
                  <span className="nav-top-item">會員中心</span>
                </Nav.Link>
                <Nav.Link href="#link">
                  <img
                    src={phone}
                    width="13"
                    height="13"
                    className="d-inline-block nav-icon"
                    alt="phone"
                  />
                  <span className="nav-top-item">聯絡我們</span>
                </Nav.Link>
              </Nav>
              <Nav className="ml-auto nav-container">
                <Nav.Link className="nav-bottom" href="#home">
                  <span className="nav-bottom-item">旅遊行程</span>
                </Nav.Link>
                <Nav.Link className="nav-bottom" href="#link">
                  <span className="nav-bottom-item">戶外用品</span>
                </Nav.Link>
                <Nav.Link className="nav-bottom" href="#link">
                  <span className="nav-bottom-item">旅遊評價</span>
                </Nav.Link>
                <Nav.Link className="nav-bottom" href="#link">
                  <span className="nav-bottom-item">我們的理念</span>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </Container>
    );
  }
}

export default NavBar_Home;
