import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import NavBar from "../../component/NavBar/NavBar";
import MemberLeftMenu from "../../component/member_left_menu/MemberLeftMenu";
import MemberInfoList from "../../component/Member_info_list/MemberInfoList";
import MemberPassword from "../../component/Member_password/MemberPassword";
import MemberCommentList from "../../component/Member_comment_list/MemberCommentList";
import MemberOrderList from "../../component/Member_order_list/MemberOrderList";
import MemberWishList from "../../component/Member_wish_list/MemberWishList";
import MemberCoupon from "../../component/Member_coupon/MemberCoupon";

import axios from "axios";
import "./dashboard.css";
//
import { Route, Switch } from "react-router-dom";
//

class DashBoard extends Component {
  state = {
    data: []
  };

  async componentDidMount() {
    const { data } = await axios.get("http://localhost:3001/members");
    this.setState({ data: data.rows[0] });
  }

  render() {
    const { data } = this.state;
    return (
      <>
        <NavBar />
        <div className="container">
         
          <Row className="member-section">
            <Col className="col-xl-3 col-md-4 member-left-section">
              <MemberLeftMenu />
            </Col>
            <Col className="col-xl-9 col-md-8 member-right-section">
              <Switch>
                <Route path="/members/coupons" component={MemberCoupon} />
                <Route path="/members/comments" component={MemberCommentList} />
                <Route path="/members/orders" component={MemberOrderList} />
                <Route
                  path="/members/wishlists"
                  exact
                  component={MemberWishList}
                />
                <div>
                  <Route
                    path="/members"
                    render={() => <MemberInfoList data={data} />}
                  />
                  <Route path="/members" component={MemberPassword} />
                </div>
              </Switch>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default DashBoard;
