import React from "react";
// import styles from './Home.module.css'
import TopNav from "../TopNav/TopNav";
import BottomNav from "../BottomNav/BottomNav";
import Header from "./Header/Header";
import Opportunities from "./Opportunities/Opportunities";

export default function Home() {
  return (
    <>
      <TopNav />
      <BottomNav />
      <Header/>
      <Opportunities/>
    </>
  );
}
