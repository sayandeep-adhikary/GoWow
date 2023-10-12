import React, { useState } from "react";
import styles from "./Opportunities.module.css";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Card from "./Card/Card";
import userIcon from "../../../assets/userIcon.png";
import NGOIcon from "../../../assets/donateIcon.png";
import businessIcon from "../../../assets/businessIcon.png";
import { BsHeartPulse } from "react-icons/bs";
import { PiGraduationCap } from "react-icons/pi";
import { GoPeople } from "react-icons/go";
import ToggleButton from "../../ToggleButton/ToggleButton";
import CardView from "./CardView/CardView";
import CalendarView from "./CalendarView/CalendarView";
import { MdAddCircle } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Opportunities({ isUser }) {
  const [showView, setShowView] = useState("card");
  return (
    <Box pos={"relative"} bg={"#F7F6FD"}>
      <Flex
        justifyContent={"center"}
        pos={"absolute"}
        className={styles.cardContainer}
      >
        <Card icon={userIcon} count={324} text={"Total Users"} />
        <Card icon={NGOIcon} count={324} text={"NGOs"} />
        <Card icon={businessIcon} count={324} text={"Businesses"} />
      </Flex>
      <Box pt="40" className={styles.container}>
        <div className="container">
          <div className="row">
            <div
              className={`col-sm-12 col-lg-6 d-flex align-items-center justify-content-start my-3 ${styles.textContainer}`}
            >
              <Text
                mb={0}
                fontFamily={"'Poppins', sans-serif"}
                fontSize={"2rem"}
                style={{ borderBottom: "3px solid #5B4899" }}
              >
                Opportunities
              </Text>
            </div>
            <div className="col-sm-12 col-lg-6 d-flex align-items-center justify-content-end my-3">
              <Flex gap={3}>
                {isUser === false && (
                  <Link to="/addopportunity">
                    <Button
                      leftIcon={<MdAddCircle size={25} />}
                      borderRadius={"10px"}
                      bg={"color.1"}
                      color={"white"}
                      w={210}
                      _hover={{
                        bg: "white",
                        border: "1px solid #5B4899",
                        color: "#5B4899",
                      }}
                    >
                      <Text
                        fontFamily={"'Poppins', sans-serif"}
                        mb={0}
                        letterSpacing={"1px"}
                        fontWeight={400}
                      >
                        Add Opportinity
                      </Text>
                    </Button>
                  </Link>
                )}
                <Button
                  borderRadius={"10px"}
                  bg={"color.1"}
                  color={"white"}
                  w={125}
                  _hover={{
                    bg: "white",
                    border: "1px solid #5B4899",
                    color: "#5B4899",
                  }}
                >
                  <Text
                    fontFamily={"'Poppins', sans-serif"}
                    mb={0}
                    letterSpacing={"1px"}
                    fontWeight={400}
                  >
                    View All
                  </Text>
                </Button>
              </Flex>
            </div>
          </div>
        </div>
        {/* <Flex
          alignItems={"end"}
          justifyContent={"space-between"}
          px={20}
          className={styles.opportunityHeadingContainer}
        >
          <Text
            mb={0}
            fontFamily={"'Poppins', sans-serif"}
            fontSize={"2rem"}
            style={{ borderBottom: "3px solid #5B4899" }}
          >
            Opportunities
          </Text>
          <Button
            borderRadius={"10px"}
            bg={"color.1"}
            color={"white"}
            w={125}
            _hover={{
              bg: "white",
              border: "1px solid #5B4899",
              color: "#5B4899",
            }}
          >
            <Text
              fontFamily={"'Poppins', sans-serif"}
              mb={0}
              letterSpacing={"1px"}
              fontWeight={400}
            >
              View All
            </Text>
          </Button>
        </Flex> */}
      </Box>
      <Box>
        <Flex justifyContent={"space-evenly"} alignItems={"center"} py={20}>
          <Box
            className={`card ${styles.opportunityTypebtn}`}
            style={{
              width: "15rem",
              cursor: "pointer",
              border: "1px solid #5B4899",
            }}
            _hover={{
              bg: "color.1",
              color: "white",
            }}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Flex alignItems={"center"} justifyContent={"space-around"} py={3}>
              <Box className={styles.modalIcon}>
                <BsHeartPulse
                  color="#5B4899"
                  size={"3vw"}
                  className={styles.icon}
                />
              </Box>
              <Text
                className={`card-title ${styles.opportunityTypeText}`}
                fontSize={"1.5rem"}
                mb={0}
                fontWeight={600}
              >
                {"Life Saving"}
              </Text>
            </Flex>
          </Box>
          <Box
            className={`card ${styles.opportunityTypebtn}`}
            style={{
              width: "15rem",
              cursor: "pointer",
              border: "1px solid #5B4899",
            }}
            _hover={{
              bg: "color.1",
              color: "white",
            }}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Flex alignItems={"center"} justifyContent={"space-around"} py={3}>
              <Box className={styles.modalIcon}>
                <PiGraduationCap
                  color="#5B4899"
                  size={"3vw"}
                  className={styles.icon}
                />
              </Box>
              <Text
                className={`card-title ${styles.opportunityTypeText}`}
                fontSize={"1.5rem"}
                mb={0}
                fontWeight={600}
              >
                {"Material"}
              </Text>
            </Flex>
          </Box>
          <Box
            className={`card ${styles.opportunityTypebtn}`}
            style={{
              width: "15rem",
              cursor: "pointer",
              border: "1px solid #5B4899",
            }}
            _hover={{
              bg: "color.1",
              color: "white",
            }}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Flex alignItems={"center"} justifyContent={"space-around"} py={3}>
              <Box className={styles.modalIcon}>
                <GoPeople
                  color="#5B4899"
                  size={"3vw"}
                  className={styles.icon}
                />
              </Box>
              <Text
                className={`card-title ${styles.opportunityTypeText}`}
                fontSize={"1.5rem"}
                mb={0}
                fontWeight={600}
              >
                {"Volunteers"}
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <ToggleButton setShowView={setShowView} />
      {showView === "card" ? <CardView /> : <CalendarView />}
    </Box>
  );
}
