import React from "react";
// import styles from './Home.module.css'
import TopNav from "../TopNav/TopNav";
import BottomNav from "../BottomNav/BottomNav";
import Header from "./Header/Header";
import Opportunities from "./Opportunities/Opportunities";
import HowItWorks from "../HowItWorks/HowItWorks";
import Gallery from "../Gallery/Gallery";
import Testimonials from "./Testimonials/Testimonials";
import Downloads from "./Downloads/Downloads";
import Footer from "../Footer/Footer";

export default function Home({isUser}) {
  return (
    <>
      <TopNav isUser={isUser}/>
      <BottomNav isUser={isUser}/>
      <Header/>
      <Opportunities isUser={isUser}/>
      <HowItWorks/>
      <Gallery/>
      <Testimonials/>
      <Downloads/>
      <Footer/>
    </>
  );
}
