import React, { Component } from "react";
import { Carousel, Button } from "react-bootstrap";
import "./carousel_home.css";
import northernLight from "./img/northern_light.jpg";
import polarExpert from "./img/polar_expert.jpg";
import canoe from "./img/canoe.jpg";

class CarouselHome extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <div className="filter" />
          <img
            className="d-block w-100 banner-img"
            src={polarExpert}
            alt="First slide"
          />
          <Carousel.Caption className="main_caption">
            <p className="main_description">的專家</p>
            <h1 className="main_title">極地旅行</h1>
            <Button className="main_btn">查看所有評論</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="filter" />
          <img
            className="d-block w-100 banner-img"
            src={northernLight}
            alt="Third slide"
          />
          <Carousel.Caption className="main_caption">
            <p className="main_description">在北極光下</p>
            <h1 className="main_title">冰島</h1>
            <Button className="main_btn">了解更多</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="filter" />
          <img
            className="d-block w-100 banner-img"
            src={canoe}
            alt="Third slide"
          />

          <Carousel.Caption className="main_caption">
            <p className="main_description">在北極光下</p>
            <h1 className="main_title">冰島</h1>
            <Button className="main_btn">了解更多</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default CarouselHome;
