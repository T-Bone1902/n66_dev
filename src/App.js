import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarHome from "./component/NavBar_home/NavbarHome";
import CarouselHome from "./component/Carousel_home/CarouselHome";
import FilterHome from "./component/Filter_home/FilterHome";

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <NavBarHome />
        <div className="">
          <CarouselHome />
          <FilterHome />
        </div>
      </>
    );
  }
}

export default App;
