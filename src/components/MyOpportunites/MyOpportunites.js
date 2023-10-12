import React, { useState } from "react";
import TopNav from "../TopNav/TopNav";
import BottomNav from "../BottomNav/BottomNav";
import OpportunityToggleBtn from "../OpportunityToggleBtn/OpportunityToggleBtn";
import MyOpportunityCard from "./MyOpportunityCard/MyOpportunityCard";
import { Flex, Text } from "@chakra-ui/react";
import styles from "./MyOpportunites.module.css";
import Footer from "../Footer/Footer";
import NGOopportunityToggleBtn from "../NGOopportunityToggleBtn/NGOopportunityToggleBtn";

export default function MyOpportunites({ isUser }) {
  const [showView, setShowView] = useState("card");
  return (
    <>
      <TopNav />
      <BottomNav />
      <Flex pt={10} alignItems={"center"} justifyContent={"center"}>
        {isUser ? (
          <OpportunityToggleBtn setShowView={setShowView} />
        ) : (
          <NGOopportunityToggleBtn setShowView={setShowView} />
        )}
      </Flex>
      <div
        className={`container-fluid ${styles.container}`}
        style={{ padding: "0 5rem" }}
      >
        <div className="row">
          <div className="col-sm-12 col-lg-4 d-flex align-items-center justify-content-center">
            <MyOpportunityCard isUser={isUser} />
          </div>
          <div className="col-sm-12 col-lg-4 d-flex align-items-center justify-content-center">
            <MyOpportunityCard isUser={isUser} />
          </div>
          <div className="col-sm-12 col-lg-4 d-flex align-items-center justify-content-center">
            <MyOpportunityCard isUser={isUser} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-lg-4 d-flex align-items-center justify-content-center">
            <MyOpportunityCard isUser={isUser} />
          </div>
          <div className="col-sm-12 col-lg-4 d-flex align-items-center justify-content-center">
            <MyOpportunityCard isUser={isUser} />
          </div>
          <div className="col-sm-12 col-lg-4 d-flex align-items-center justify-content-center">
            <MyOpportunityCard isUser={isUser} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
