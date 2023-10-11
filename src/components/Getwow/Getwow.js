import React from "react";
import { Text } from "@chakra-ui/react";
import styles from "./Getwow.module.css";
import TopNav from "../TopNav/TopNav";
import BottomNav from "../BottomNav/BottomNav";
import GetwowCard from "./GetwowCard/GetwowCard";
import Footer from "../Footer/Footer";

export default function Getwow() {
  return (
    <>
      <TopNav />
      <BottomNav />
      <div
        className={`container-fluid ${styles.container}`}
        style={{ padding: "2rem 5rem 10rem" }}
      >
        <div className="row">
          <div className="col-sm-12 col-lg-4 d-flex align-items-center justify-content-center">
            <GetwowCard />
          </div>
          <div className="col-sm-12 col-lg-4 d-flex align-items-center justify-content-center">
            <GetwowCard />
          </div>
          <div className="col-sm-12 col-lg-4 d-flex align-items-center justify-content-center">
            <GetwowCard />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-lg-4 d-flex align-items-center justify-content-center">
            <GetwowCard />
          </div>
          <div className="col-sm-12 col-lg-4 d-flex align-items-center justify-content-center">
            <GetwowCard />
          </div>
          <div className="col-sm-12 col-lg-4 d-flex align-items-center justify-content-center">
            <GetwowCard />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
