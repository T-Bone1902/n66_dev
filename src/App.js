import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FilterHome from "./component/Filter_home/FilterHome";
// complete
import NavBar from "./component/NavBar/NavBar";
import MemberLeftMenu from "./component/MemberLeftMenu/MemberLeftMenu";
import MemberInfoList from "./component/MemberInfoList/MemberInfoList";
import MemberPassword from "./component/MemberPassword/MemberPassword";
import MemberWishList from "./component/MemberWishList/MemberWishList";
import MemberOrderList from "./component/MemberOrderList/MemberOrderList";
import MemberCommentList from "./component/MemberCommentList/MemberCommentList";
import MemberCoupon from "./component/MemberCoupon/MemberCoupon";
import NavBarHome from "./component/NavBarHome/NavBarHome";
import HomeMainCarousel from "./component/HomeMainCarousel/HomeMainCarousel";
import CommentFilterBox from "./component/CommentFilterBox/CommentFilterBox";
import CheckOutContent from "./component/CheckOutContent/CheckOutContent";
import TripDesNav from "./component/TripDesNav/TripDesNav";

// import Login from "./component/Login/Login";
import CommentModal from "./component/CommentModal/CommentModal";

// page
import Comment from "./page/Comment/Comment";
import DashBoard from "./page/DashBoard/DashBoard";
import Order from "./page/Order/Order";
import WishList from "./page/WishList/WishList";
import Home from "./page/Home/Home";

// Routers
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        {/* <NavBar /> */}
        {/* <MemberLeftMenu /> */}
        {/* <MemberInfoList /> */}
        {/* <MemberPassword /> */}
        {/* <MemberWishList /> */}
        {/* <MemberOrderList /> */}
        {/* <MemberCommentList /> */}
        {/* <MemberCoupon /> */}
        {/* <NavBarHome /> */}
        {/* <CommentFilterBox /> */}
        {/* <HomeMainCarousel /> */}
        {/* <CheckOutContent /> */}
        {/* <CommentModal /> */}
       
        {/*  */}
        {/* <TripDesNav/> */}
        {/* <FilterHome /> */}
        {/* <Login /> */}

        {/* page */}
        {/* <Comment /> */}
        {/* <DashBoard /> */}
        {/* <Order /> */}
        {/* <WishList /> */}
        {/* <Home /> */}
        <Switch>
          <Route path="/comments" component={Comment} />
          <Route path="/members" component={DashBoard} />
          <Route path="/" exact component={Home} />
        </Switch>
      </>
    );
  }
}

export default App;
