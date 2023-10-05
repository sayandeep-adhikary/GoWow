import React from "react";
import styles from "./Opportunities.module.css";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Card from "./Card/Card";
import userIcon from "../../../assets/userIcon.png";
import NGOIcon from "../../../assets/donateIcon.png";
import businessIcon from "../../../assets/businessIcon.png";

export default function Opportunities() {
  return (
    <Box pos={"relative"}>
      <Flex
        justifyContent={"center"}
        pos={"absolute"}
        className={styles.cardContainer}
      >
        <Card icon={userIcon} count={324} text={"Total Users"} />
        <Card icon={NGOIcon} count={324} text={"NGOs"} />
        <Card icon={businessIcon} count={324} text={"Businesses"} />
      </Flex>
      <Box py="40">
        <Flex alignItems={"end"} justifyContent={"space-between"} px={20}>
          <Text mb={0} fontFamily={"'Poppins', sans-serif"} fontSize={'2rem'} style={{borderBottom: '3px solid #5B4899'}}>
            Opportunities
          </Text>
          <Button borderRadius={"10px"} bg={"color.1"} color={"white"} w={125}>
            <Text fontFamily={"'Poppins', sans-serif"} mb={0}>View All</Text>
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}
