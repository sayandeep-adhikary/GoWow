import React, { useState } from "react";
import styles from "./HowItWorks.module.css";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import HIWToggleBtn from "../HIWToggleBtn/HIWToggleBtn";
import HIWCard from "./HIWCard/HIWCard";

export default function HowItWorks() {
  const [showView, setShowView] = useState("donors");
  return (
    <Box bg={"#F7F6FD"} py={10}>
      <Flex alignItems={"end"} justifyContent={"space-between"} px={20}>
        <Text
          mb={0}
          fontFamily={"'Poppins', sans-serif"}
          fontSize={"2rem"}
          style={{ borderBottom: "3px solid #5B4899" }}
        >
          How It Works ?
        </Text>
      </Flex>
      <Container py={10}>
        <HIWToggleBtn setShowView={setShowView} />
      </Container>
      <Box px={20}>
        <div className="row">
          <div className="col-sm-12 col-lg-4">
            <HIWCard
              count="1"
              heading="How to Search Opportunity"
              text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of loarem."
            />
          </div>
          <div className="col-sm-12 col-lg-4">
            <HIWCard
              count="2"
              heading="How to Grab Opportunity"
              text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of loarem."
            />
          </div>
          <div className="col-sm-12 col-lg-4">
            <HIWCard
              count="3"
              heading="How to Perform Opportunity"
              text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of loarem."
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-lg-6 d-flex justify-content-end align-items-center">
            <HIWCard
              count="4"
              heading="Wow coins and How to See Wow Points"
              text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of loarem."
            />
          </div>
          <div className="col-sm-12 col-lg-6 d-flex justify-content-start align-items-center">
            <HIWCard
              count="5"
              heading="How to Redeem Wow coins and Get Discount"
              text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of loarem."
            />
          </div>
        </div>
      </Box>
    </Box>
  );
}
