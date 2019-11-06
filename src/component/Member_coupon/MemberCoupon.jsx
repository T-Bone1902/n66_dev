import React, { Component } from "react";
import { Row } from "react-bootstrap";
import "./member_coupon.css";
class MemberCoupon extends Component {
  state = {};
  render() {
    return (
      <div className="coupon-outer-container">
        <Row style={{ justifyContent: "space-between" }}>
          <div className="coupon-container col-lg-3 col-md-4 col-sm-12">
            <div className="banner">
              <h5 className="py-2">85折優惠碼</h5>
              <span>適用所有露營類產品</span>
              <p className="m-0">有效期限: 2020/3/4</p>
            </div>
            <div className="footer d-flex">
              <button className="btn">前往使用</button>
            </div>
            <div className="left-circle"></div>
            <div className="right-circle"></div>
          </div>
          <div className="coupon-container col-lg-3 col-md-4 col-sm-12">
            <div className="banner">
              <h5 className="py-2">85折優惠碼</h5>
              <span>適用所有露營類產品</span>
              <p className="m-0">有效期限: 2020/3/4</p>
            </div>
            <div className="footer d-flex">
              <button className="btn">前往使用</button>
            </div>
            <div className="left-circle"></div>
            <div className="right-circle"></div>
          </div>
          <div className="coupon-container col-lg-3 col-md-4 col-sm-12">
            <div className="banner">
              <h5 className="py-2">85折優惠碼</h5>
              <span>適用所有露營類產品</span>
              <p className="m-0">有效期限: 2020/3/4</p>
            </div>
            <div className="footer d-flex">
              <button className="btn">前往使用</button>
            </div>
            <div className="left-circle"></div>
            <div className="right-circle"></div>
          </div>
          <div className="coupon-container col-lg-3 col-md-4 col-sm-12">
            <div className="banner">
              <h5 className="py-2">85折優惠碼</h5>
              <span>適用所有露營類產品</span>
              <p className="m-0">有效期限: 2020/3/4</p>
            </div>
            <div className="footer d-flex">
              <button className="btn">前往使用</button>
            </div>
            <div className="left-circle"></div>
            <div className="right-circle"></div>
          </div>
        </Row>
      </div>
    );
  }
}

export default MemberCoupon;
