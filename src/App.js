import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarHome from "./component/NavBar_home/NavbarHome";
import CarouselHome from "./component/Carousel_home/CarouselHome";
import FilterHome from "./component/Filter_home/FilterHome";
import Login from "./component/Login/Login";
import NavBar from "./component/NavBar/NavBar";
import MemberLeftMenu from "./component/member_left_menu/MemberLeftMenu";
import MemberInfoList from "./component/Member_info_list/MemberInfoList";
import MemberPassword from "./component/Member_password/MemberPassword";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        {/* <NavBarHome /> */}
        {/* <CarouselHome /> */}
        {/* <FilterHome /> */}
        <NavBar />
        <MemberLeftMenu />
        <MemberInfoList />
        <MemberPassword />
      </>
      // <Login />
    );
  }
}

export default App;
