import React, { Component } from "react";
import {
  Dropdown,
  Form,
  Button,
  Row,
  InputGroup,
  FormControl,
  Col
} from "react-bootstrap";
import { ReactComponent as Location } from "./img/location.svg";
import { ReactComponent as Trac } from "./img/trac.svg";
import { ReactComponent as Binoculars } from "./img/binoculars.svg";
import { ReactComponent as Search } from "./img/search.svg";
import { ReactComponent as Filter } from "./img/filter.svg";
import "./filter_home.css";

class FilterHome extends Component {
  state = {
    searchbox: {
      isActive: false,
      originalDom: (
        <>
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
              <Binoculars
                className="binoculars"
                height="24"
                width="24"
              ></Binoculars>
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
        </>
      ),
      dom: (
        <>
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
              <Binoculars
                className="binoculars"
                height="24"
                width="24"
              ></Binoculars>
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
        </>
      )
    }
  };

  handleSearch = e => {
    const { isActive } = this.state.searchbox;
    if (isActive === false) {
      const searchbox = { ...this.state.searchbox };
      searchbox.isActive = true;
      searchbox.dom = (
        <InputGroup className="searchbox-input-container">
          <FormControl
            placeholder="請輸入關鍵字"
            aria-label="Username"
            aria-describedby="basic-addon1"
            className="searchbox-input"
          />
        </InputGroup>
      );
      this.setState({ searchbox });
    }
    if (isActive === true) {
      const searchbox = { ...this.state.searchbox };
      searchbox.isActive = false;
      searchbox.dom = this.state.searchbox.originalDom;
      this.setState({ searchbox });
    }
  };

  render() {
    const { searchbox } = this.state;
    return (
      <>
        <Form className="main-filter-container">
          <Row className="row-no-margin searchbox-row">

            {searchbox.dom}
            <div
              className="d-flex d-flex-1 search-btn"
              onClick={this.handleSearch}
            >
              <Search heigth="20" width="20" className="margin-auto search" />
            </div>
            <div className="d-flex-1 submit-btn">
              <Button
                type="submit"
                className="main-filter-btn d-flex-1 text-center"
              >
                搜尋
              </Button>
            </div>
          </Row>
        </Form>

        <Row className="before-rwd">
          <Col>
            <div className="main-filter-container-rwd d-flex">
              <div className="icon d-flex">
                <Filter className="m-auto " height="20" width="20" />
              </div>
              <div className="search">
                <p>搜尋</p>
              </div>
            </div>
          </Col>
        </Row>

        <div className="filter-menu">
          <div>
            <a className="filterToggler ml-auto d-flex justify-content-center align-items-center" role="button">
              <div className="toggle-inner d-flex flex-column justify-content-between align-items-center">
                <div className="white-line up-line"></div>
                <div className="white-line down-line"></div>
              </div>
            </a>
          </div>
          <ul>
            <li>
              <a href="#8">
                <h5>旅程目的地</h5>
              </a>
            </li>
            <li>
              <a href="#19">
                <h5>活動與主題</h5>
                
              </a>
            </li>
            <li>
              <a href="#2">
                <h5>器具與裝備</h5>
                
              </a>
            </li>
            <li>
              <a href="#3">
                <h5>關於66N</h5>
                
              </a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default FilterHome;
