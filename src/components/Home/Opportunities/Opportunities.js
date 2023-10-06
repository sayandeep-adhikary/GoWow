import React from "react";
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

export default function Opportunities() {
  return (
    <Box pos={"relative"} bg={'#F7F6FD'}>
      <Flex
        justifyContent={"center"}
        pos={"absolute"}
        className={styles.cardContainer}
      >
        <Card icon={userIcon} count={324} text={"Total Users"} />
        <Card icon={NGOIcon} count={324} text={"NGOs"} />
        <Card icon={businessIcon} count={324} text={"Businesses"} />
      </Flex>
      <Box pt="40">
        <Flex alignItems={"end"} justifyContent={"space-between"} px={20}>
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
        </Flex>
      </Box>
      <Box>
        <Flex justifyContent={'space-evenly'} alignItems={'center'} py={20}>
          <div
            className="card"
            style={{
              width: "15rem",
              cursor: "pointer",
              border: '1px solid #5B4899'
            }}
          >
            <Flex alignItems={'center'} justifyContent={'space-around'} py={3}>
              <Box className={styles.modalIcon}>
                <BsHeartPulse color="#5B4899" size={30}/>
              </Box>
              <Text className="card-title" fontSize={"1.5rem"} mb={0} fontWeight={600}>
                {"Life Saving"}
              </Text>
            </Flex>
          </div>
          <div
            className="card"
            style={{
              width: "15rem",
              cursor: "pointer",
              border: '1px solid #5B4899'
            }}
          >
            <Flex alignItems={'center'} justifyContent={'space-around'} py={3}>
              <Box className={styles.modalIcon}>
                <PiGraduationCap color="#5B4899" size={30}/>
              </Box>
              <Text className="card-title" fontSize={"1.5rem"} mb={0} fontWeight={600}>
                {"Material"}
              </Text>
            </Flex>
          </div>
          <div
            className="card"
            style={{
              width: "15rem",
              cursor: "pointer",
              border: '1px solid #5B4899'
            }}
          >
            <Flex alignItems={'center'} justifyContent={'space-around'} py={3}>
              <Box className={styles.modalIcon}>
                <GoPeople color="#5B4899" size={30}/>
              </Box>
              <Text className="card-title" fontSize={"1.5rem"} mb={0} fontWeight={600}>
                {"Volunteers"}
              </Text>
            </Flex>
          </div>
        </Flex>
      </Box>
      <ToggleButton/>
    </Box>
  );
}
