import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarHome from "./component/NavBar_home/NavbarHome";
import CarouselHome from "./component/Carousel_home/CarouselHome";
import FilterHome from "./component/Filter_home/FilterHome";
import Login from "./component/Login/Login";
import NavBar from "./component/NavBar/NavBar";
import MemberLeftMenu from "./component/member_left_menu/MemberLeftMenu";
import MemberInfoList from "./component/Member_info_list/MemberInfoList";
import MemberPassword from "./component/Member_password/MemberPassword";
import MemberWishList from "./component/Member_wish_list/MemberWishList";
import OrderList from "./component/Member_order_list/MemberOrderList";
import MemberCommentList from "./component/Member_comment_list/MemberCommentList";
import CommentFilterBox from "./component/Comment_filter_box/CommentFilterBox";
import MemberCoupon from "./component/Member_coupon/MemberCoupon";

// page
import Comment from "./page/comment/Comment.jsx";
import DashBoard from "./page/dashboard/DashBoard";
import Order from "./page/order/Order";
import WishList from "./page/wishlist/WishList";
//
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        {/* <NavBarHome /> */}
        {/* <CarouselHome /> */}
        {/* <FilterHome /> */}
        {/* <NavBar /> */}
        {/* <MemberLeftMenu /> */}
        {/* <MemberInfoList /> */}
        {/* <MemberPassword /> */}
        {/* <MemberWishList /> */}
        {/* <OrderList /> */}
        {/* <Login /> */}
        {/* <MemberCommentList /> */}
        {/* <CommentFilterBox /> */}

        {/* page */}
        {/* <Comment /> */}
        <DashBoard />
        {/* <Order /> */}
        {/* <WishList /> */}
      </>
    );
  }
}

export default App;
