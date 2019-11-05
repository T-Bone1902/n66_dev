import React, { Component } from "react";
import "./member_comment_list.css";
import { ReactComponent as Star } from "./img/star.svg";
import { Dropdown, DropdownButton } from "react-bootstrap";

class MemberCommentList extends Component {
  render() {
    return (
      <div className="comment-container d-flex flex-column ">
        <div className="rank-container">
          <Star className="rank" />
          <Star className="rank" />
          <Star className="rank" />
          <Star className="rank" />
          <Star className="rank" />
        </div>

        <p>張小姐</p>
        <p className="duration">2020/01/04 - 2020/01/09</p>
        <p className="mb-5">
          這是一個非常美好的時光，並得到了出色的指導。
          非常感謝Alvaro，他非常關心我們，並與我們分享了他的豐富知識。
        </p>
        <div className="mt-auto comment-btn-container">
          <a href="#" className="comment-btn">
            <span>我們的瑞典之旅</span>
          </a>
        </div>
      </div>
    );
  }
}

export default MemberCommentList;
