import React, { Component } from "react";
import { Card, ListGroup } from "react-bootstrap";
import avatar from "./img/avatar.png";
import { ReactComponent as Users } from "./img/users.svg";
import { ReactComponent as Order } from "./img/order.svg";
import { ReactComponent as Like } from "./img/like.svg";
import { ReactComponent as Comment } from "./img/comment.svg";
import "./member_left_menu.css";
class MemberLeftMenu extends Component {
  state = {};
  render() {
    return (
      <>
        <Card className="member-left-menu-container">
          <Card.Img variant="top" src={avatar} className="avatar" />
          <Card.Body>
            <div className="text-align-center card-body-1">
              <Card.Title>
                <span>用戶名</span>
              </Card.Title>
              <Card.Text className="text-align-center">
                <a href="">編輯個人資訊</a>
              </Card.Text>
            </div>
            <div className="text-align-center card-body-2">
              <Card.Title>
                <a href="">0</a>
              </Card.Title>
              <Card.Text className="text-align-center">
                <span>可用優惠碼</span>
              </Card.Text>
            </div>
            <div className="text-align-center card-body-3">
              <ListGroup>
                <ListGroup.Item className="member-ul-container">
                  <a
                    href=""
                    className="vertical-align-middle"
                    style={{ height: "100%" }}
                  >
                    <Users height="16" width="16" />
                    <span className="vertical-align-middle">個人資訊</span>
                  </a>
                </ListGroup.Item>
                <ListGroup.Item className="member-ul-container">
                  <a
                    href=""
                    className="vertical-align-middle"
                    style={{ height: "100%" }}
                  >
                    <Order height="16" width="16" />
                    <span className="vertical-align-middle">我的訂單</span>
                  </a>
                </ListGroup.Item>
                <ListGroup.Item className="member-ul-container">
                  <a
                    href=""
                    className="vertical-align-middle"
                    style={{ height: "100%" }}
                  >
                    <Comment height="16" width="16" />
                    <span className="vertical-align-middle">我的評價</span>
                  </a>
                </ListGroup.Item>
                <ListGroup.Item className="member-ul-container">
                  <a
                    href=""
                    className="vertical-align-middle"
                    style={{ height: "100%" }}
                  >
                    <Like height="16" width="16" />
                    <span className="vertical-align-middle">願望清單</span>
                  </a>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default MemberLeftMenu;
