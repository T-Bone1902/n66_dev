import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarHome from "./component/NavBar_home/NavbarHome";
import CarouselHome from "./component/Carousel_home/CarouselHome";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <NavBarHome />
        <CarouselHome />
      </>
    );
  }
}

export default App;
