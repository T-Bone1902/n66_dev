import React, { Component } from "react";
import { Dropdown, Form, Button, Row } from "react-bootstrap";
import { ReactComponent as Location } from "./img/location.svg";
import { ReactComponent as Trac } from "./img/trac.svg";
import binoculars from "./img/binoculars.svg";
import search from "./img/search.svg";
import "./filter_home.css";

class FilterHome extends Component {
  render() {
    return (
      <Form className="main-filter-container">
        <Row className="row-no-margin">
          <Dropdown className="filter-icon-container d-flex-2">
            <Dropdown.Toggle id="dropdown-basic" className="filter-icon">
              <Location className="location" height="24" width="24"></Location>
              <span className="filter-icon-title">目的地</span>
            </Dropdown.Toggle>
            <Dropdown.Menu className="toggle-menu">
              <Dropdown.Item href="#/action-1" className="toggle-item">
                冰島
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2" className="toggle-item">
                挪威
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3" className="toggle-item">
                芬蘭
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3" className="toggle-item">
                加拿大
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3" className="toggle-item">
                俄羅斯
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="filter-icon-container d-flex-2">
            <Dropdown.Toggle id="dropdown-basic" className="filter-icon">
              <Trac className="trac" height="24" width="24"></Trac>
              <span className="filter-icon-title">旅行類型</span>
            </Dropdown.Toggle>
            <Dropdown.Menu className="toggle-menu">
              <Dropdown.Item href="#/action-1" className="toggle-item">
                冰島
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2" className="toggle-item">
                挪威
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3" className="toggle-item">
                芬蘭
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3" className="toggle-item">
                加拿大
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3" className="toggle-item">
                俄羅斯
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="filter-icon-container d-flex-2">
            <Dropdown.Toggle id="dropdown-basic" className="filter-icon">
              <img src={binoculars} height="24" width="24"></img>
              <span className="filter-icon-title">活動與主題</span>
            </Dropdown.Toggle>
            <Dropdown.Menu className="toggle-menu">
              <Dropdown.Item href="#/action-1" className="toggle-item">
                不拘
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2" className="toggle-item">
                北極光
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3" className="toggle-item">
                獨木舟
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3" className="toggle-item">
                動物觀察
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3" className="toggle-item">
                多種活動
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <div className="d-flex d-flex-1">
            <img
              src={search}
              heigth="20"
              width="20"
              className="margin-auto "
            ></img>
          </div>
          <Button type="submit" className="main-filter-btn d-flex-1">
            搜尋
          </Button>
        </Row>
      </Form>
    );
  }
}

export default FilterHome;
