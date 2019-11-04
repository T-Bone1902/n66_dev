import React, { Component } from "react";
import "./member_comment_list.css";
import { ReactComponent as Star } from "./img/star.svg";
import { Dropdown, DropdownButton } from "react-bootstrap";

class MemberCommentList extends Component {
  render() {
    return (
      <>
        {/* filter */}
        <DropdownButton
          id="dropdown-basic-button"
          title="所有目的地"
          className="member-comment-filter-container"
        >
          <Dropdown.Item href="#/action-1">ActAion</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
        {/*  */}
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
          <p>
            這是一個非常美好的時光，並得到了出色的指導。
            非常感謝Alvaro，他非常關心我們，並與我們分享了他的豐富知識。
          </p>
          <div className="mt-auto btn-container">
            <a href="#" className="all-button">
              <span className="">我們的瑞典之旅</span>
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default MemberCommentList;
