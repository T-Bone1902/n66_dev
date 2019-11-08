import React, { Component } from "react";
// Components
import NavBar_home from "../../component/NavBarHome/NavBarHome";
import HomeMainCarousel from "../../component/HomeMainCarousel/HomeMainCarousel";
import DashBoard from "../DashBoard/DashBoard";

// Routers
import { Route, Switch } from "react-router-dom";

class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <NavBar_home />
        <HomeMainCarousel />
      </>
    );
  }
}

export default Home;
