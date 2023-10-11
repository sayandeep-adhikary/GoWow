import React, { useState } from "react";
import TopNav from "../TopNav/TopNav";
import BottomNav from "../BottomNav/BottomNav";
import OpportunityToggleBtn from "../OpportunityToggleBtn/OpportunityToggleBtn";
import MyOpportunityCard from "./MyOpportunityCard/MyOpportunityCard";
import { Flex, Text } from "@chakra-ui/react";
import styles from "./MyOpportunites.module.css";
import Footer from "../Footer/Footer";

export default function MyOpportunites() {
  const [showView, setShowView] = useState("card");
  return (
    <>
      <TopNav />
      <BottomNav />
      <Flex pt={10} alignItems={"center"} justifyContent={"center"}>
        <OpportunityToggleBtn setShowView={setShowView} />
      </Flex>
      <div
        className={`container-fluid ${styles.container}`}
        style={{ padding: "0 5rem" }}
      >
        <div className="row">
          <div className="col-sm-12 col-lg-4 d-flex align-items-center justify-content-center">
            <MyOpportunityCard />
          </div>
          <div className="col-sm-12 col-lg-4 d-flex align-items-center justify-content-center">
            <MyOpportunityCard />
          </div>
          <div className="col-sm-12 col-lg-4 d-flex align-items-center justify-content-center">
            <MyOpportunityCard />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-lg-4 d-flex align-items-center justify-content-center">
            <MyOpportunityCard />
          </div>
          <div className="col-sm-12 col-lg-4 d-flex align-items-center justify-content-center">
            <MyOpportunityCard />
          </div>
          <div className="col-sm-12 col-lg-4 d-flex align-items-center justify-content-center">
            <MyOpportunityCard />
          </div>
        </div>
        <Text
          textAlign={"center"}
          color={"color.1"}
          py={5}
          mb={0}
          fontWeight={600}
          letterSpacing={"1px"}
          cursor={"pointer"}
        >
          See More
        </Text>
      </div>
      <Footer />
    </>
  );
}
