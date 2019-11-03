import React, { Component } from "react";
import { Navbar, Nav, Breadcrumb } from "react-bootstrap";
import { ReactComponent as Logo } from "./img/logo.svg";
import { ReactComponent as User } from "./img/user.svg";
import { ReactComponent as Cart } from "./img/cart.svg";
import "./navbar.css";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <>
        <Navbar bg="light" expand="lg" className="navbar-container">
          <Navbar.Brand href="#home" className="navbar-logo">
            <Logo height="60" width="60" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="nabar-items-container"
          >
            <Nav className="ml-auto ">
              <Nav.Link className="navbar-item" href="#home">
                <span className="">旅遊行程</span>
              </Nav.Link>
              <Nav.Link className="navbar-item" href="#link">
                <span className="">戶外用品</span>
              </Nav.Link>
              <Nav.Link className="navbar-item" href="#link">
                <span className="">旅遊評價</span>
              </Nav.Link>
              <Nav.Link
                className="navbar-item"
                href="#link"
                style={{ marginRight: "2rem" }}
              >
                <span>我們的理念</span>
              </Nav.Link>
              <Nav.Link className="icon-container" href="#link">
                <User height="20" width="20" className="user-icon" />
              </Nav.Link>
              <Nav.Link className="icon-container" href="#link">
                <Cart height="20" width="20" className="cart-icon" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Breadcrumb>
          <Breadcrumb.Item href="#">會員中心</Breadcrumb.Item>
          <Breadcrumb.Item
            href="https://getbootstrap.com/docs/4.0/components/breadcrumb/"
            active
          >
            個人資訊
          </Breadcrumb.Item>
        </Breadcrumb>
      </>
    );
  }
}

export default NavBar;
