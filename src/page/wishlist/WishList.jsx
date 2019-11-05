import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import NavBar from "../../component/NavBar/NavBar";
import MemberLeftMenu from "../../component/member_left_menu/MemberLeftMenu";
import MemberWishList from "../../component/Member_wish_list/MemberWishList";

import "./wishlist.css";
class WishList extends Component {
  state = {};
  render() {
    return (
      <>
        <NavBar />
        <div className="container">
          <Row>
            <Col className="col-xl-3 col-md-4 col-sm-12 col-xs-12">
              <MemberLeftMenu />
            </Col>
            <div className="col-xl-9 col-md-8 ">
              <MemberWishList />    
            </div>
          </Row>
        </div>
      </>
    );
  }
}

export default WishList;
