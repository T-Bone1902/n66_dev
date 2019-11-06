import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import NavBar from "../../component/NavBar/NavBar";
import MemberLeftMenu from "../../component/member_left_menu/MemberLeftMenu";
import MemberInfoList from "../../component/Member_info_list/MemberInfoList";
import MemberPassword from "../../component/Member_password/MemberPassword";
import axios from "axios";
import "./dashboard.css";

class DashBoard extends Component {
  state = {
    data: []
  };

  async componentDidMount() {
    const { data } = await axios.get("http://localhost:3001/members");
    // console.log(data.rows[0]);
    this.setState({ data: data.rows[0] });
  }

  render() {
    const { data } = this.state;
    return (
      <>
        <NavBar />
        <div className="container">
          <Row className="member-section">
            <Col className="col-xl-3 col-md-4 ">
              <MemberLeftMenu />
            </Col>
            <Col className="col-xl-9 col-md-8 ">
              <MemberInfoList data={data} />
              <MemberPassword />
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default DashBoard;
