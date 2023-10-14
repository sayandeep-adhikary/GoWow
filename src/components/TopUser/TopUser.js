import React from "react";
import styles from "./TopUser.module.css";
import TopNav from "../TopNav/TopNav";
import BottomNav from "../BottomNav/BottomNav";
import UserCard from "./UserCard/UserCard";
import Footer from "../Footer/Footer";

export default function TopUser({isUser}) {
  return (
    <>
      <TopNav isUser={isUser}/>
      <BottomNav isUser={isUser}/>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-4 d-flex align-items-center justify-content-center">
            <UserCard />
          </div>
          <div className="col-sm-12 col-lg-4 d-flex align-items-center justify-content-center">
            <UserCard />
          </div>
          <div className="col-sm-12 col-lg-4 d-flex align-items-center justify-content-center">
            <UserCard />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-lg-4 d-flex align-items-center justify-content-center">
            <UserCard />
          </div>
          <div className="col-sm-12 col-lg-4 d-flex align-items-center justify-content-center">
            <UserCard />
          </div>
          <div className="col-sm-12 col-lg-4 d-flex align-items-center justify-content-center">
            <UserCard />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-lg-4 d-flex align-items-center justify-content-center">
            <UserCard />
          </div>
          <div className="col-sm-12 col-lg-4 d-flex align-items-center justify-content-center">
            <UserCard />
          </div>
          <div className="col-sm-12 col-lg-4 d-flex align-items-center justify-content-center">
            <UserCard />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
