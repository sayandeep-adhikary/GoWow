import React, { useState } from "react";
// import styles from "./OpportunityCard.module.css";
import { Box, Button, Card, CardBody, Image, Text } from "@chakra-ui/react";
import businessImg from "../../../assets/businessImg.png";

export default function GetwowCard() {
  const [like, setLike] = useState(false);
  return (
    <Card
      maxW="xl"
      my={5}
      borderRadius={"2xl"}
      fontSize={"0.8rem"}
      boxShadow={"0 0 5px grey"}
    >
      <Image objectFit="cover" src={businessImg} px={2} py={2} />
      <CardBody pt={0} px={6}>
        <Box className="row mb-2" bg={"color.1"} borderRadius={"lg"}>
          <div className="col-6 d-flex align-items-center justify-content-start">
            <Text
              mb={0}
              fontSize={"1rem"}
              letterSpacing={"1px"}
              color={"white"}
              fontWeight={500}
            >
              Agni Telecom
            </Text>
          </div>
          <div className="col-6 d-flex align-items-center justify-content-end py-2">
            <Button
              color={"white"}
              bg={"color.1"}
              _hover={{
                bg: "white",
                border: "1px solid #5B4899",
                color: "#5B4899",
              }}
              variant={"outline"}
              style={{ letterSpacing: "1px" }}
              h={8}
              w={"6rem"}
            >
              <Text
                fontFamily={"'Poppins', sans-serif"}
                mb={0}
                letterSpacing={"1px"}
                fontWeight={600}
                fontSize={"0.8rem"}
              >
                View Map
              </Text>
            </Button>
          </div>
        </Box>
        <Box className="row mb-2" bg={"#F7F6FD"} borderRadius={"lg"}>
          <div className="col-6 d-flex align-items-center justify-content-start">
            <Text
              mb={0}
              fontSize={"1rem"}
              letterSpacing={"1px"}
              color={"color.1"}
              fontWeight={500}
            >
              Category
            </Text>
          </div>
          <div className="col-6 d-flex align-items-center justify-content-end py-2">
            <Text
              mb={0}
              fontSize={"0.9rem"}
              letterSpacing={"1px"}
              color={"black"}
              fontWeight={600}
            >
              Grocery & general stores 
            </Text>
          </div>
        </Box>
        <Box className="row mb-2" bg={"#F7F6FD"} borderRadius={"lg"}>
          <div className="col-6 d-flex align-items-center justify-content-start">
            <Text
              mb={0}
              fontSize={"1rem"}
              letterSpacing={"1px"}
              color={"color.1"}
              fontWeight={500}
            >
              Discount (%)
            </Text>
          </div>
          <div className="col-6 d-flex align-items-center justify-content-start py-2">
            <Text
              mb={0}
              fontSize={"0.9rem"}
              letterSpacing={"1px"}
              color={"black"}
              fontWeight={600}
            >
              15
            </Text>
          </div>
        </Box>
        <Box className="row mb-2" bg={"#F7F6FD"} borderRadius={"lg"}>
          <div className="col-6 d-flex align-items-center justify-content-start">
            <Text
              mb={0}
              fontSize={"1rem"}
              letterSpacing={"1px"}
              color={"color.1"}
              fontWeight={500}
            >
              Minimum Bill
            </Text>
          </div>
          <div className="col-6 d-flex align-items-center justify-content-start py-2">
            <Text
              mb={0}
              fontSize={"0.9rem"}
              letterSpacing={"1px"}
              color={"black"}
              fontWeight={600}
            >
              200
            </Text>
          </div>
        </Box>
        <Box className="row mb-2" bg={"#F7F6FD"} borderRadius={"lg"}>
          <div className="col-6 d-flex align-items-center justify-content-start">
            <Text
              mb={0}
              fontSize={"1rem"}
              letterSpacing={"1px"}
              color={"color.1"}
              fontWeight={500}
            >
              Address
            </Text>
          </div>
          <div className="col-6 d-flex align-items-center justify-content-start py-2">
            <Text
              mb={0}
              fontSize={"0.9rem"}
              letterSpacing={"1px"}
              color={"black"}
              fontWeight={600}
            >
              2 E Sadhna Nagar
            </Text>
          </div>
        </Box>
      </CardBody>
    </Card>
  );
}
