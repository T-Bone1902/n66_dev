import React, { Component } from "react";
// Components
import NavBar_home from "../../component/NavBar_home/NavBar_home";
import HeaderCarousel from "../../component/Home_Main_Carousel/HeaderCarousel";
import DashBoard from "../dashboard/DashBoard";

// Routers
import { Route, Switch } from "react-router-dom";

class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <NavBar_home />
        <HeaderCarousel />
      </>
    );
  }
}

export default Home;
