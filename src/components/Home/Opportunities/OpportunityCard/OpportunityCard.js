import React, { useState } from "react";
import styles from "./OpportunityCard.module.css";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { SlLike } from "react-icons/sl";
import { BsChat } from "react-icons/bs";
import NGOLogo from "../../../../assets/NGOLogo.png";
import opportunityImg from "../../../../assets/opportunityImg.png";

export default function OpportunityCard() {
  return (
    <Card maxW="lg" my={5} borderRadius={"2xl"} fontSize={"0.8rem"} boxShadow={'0 0 5px grey'}>
      <CardHeader pb={0} px={3}>
        <Flex spacing="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Image src={NGOLogo} w={79} />

            <Box>
              <Heading size="sm">Prabhu Agya Foundation</Heading>
              <Text color={"grey"} mb={0} fontSize={"0.8rem"}>
                26 January, 2023
              </Text>
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody py={2}>
        <Text mb={0} fontWeight={"600"} letterSpacing={"1px"}>
          Blood Donation Camp
        </Text>
      </CardBody>
      <Image objectFit="cover" src={opportunityImg} px={3} />
      <Text mb={0} fontWeight={"600"} letterSpacing={"1px"} px={3} my={3}>
        Prabhu Agya Foundation is organizing blood donation camp.
      </Text>

      <CardFooter justify="space-between" py={5} flex>
        <Box display={"flex"} gap={5}>
          <Flex px={0} alignItems={"center"} gap={2} fontWeight={"600"}>
            <SlLike size={20} color="#5B4899" cursor={"pointer"}/>
            <Text mb={0}>4.5K</Text>
          </Flex>
          <Flex px={0} alignItems={"center"} gap={2} fontWeight={"600"}>
            <BsChat size={20} color="#5B4899" cursor={"pointer"} />
            <Text mb={0}>150</Text>
          </Flex>
        </Box>
        <Box display={"flex"} gap={5}>
          <Button
            color={"color.1"}
            _hover={{
              color: "white",
              bg: "color.1",
            }}
            variant={"outline"}
            style={{ letterSpacing: "1px", border: "1px solid #5B4899" }}
            h={8}
            w={"4rem"}
          >
            <Text
              fontFamily={"'Poppins', sans-serif"}
              mb={0}
              letterSpacing={"1px"}
              fontWeight={600}
              fontSize={"0.8rem"}
            >
              Share
            </Text>
          </Button>
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
            w={"4rem"}
          >
            <Text
              fontFamily={"'Poppins', sans-serif"}
              mb={0}
              letterSpacing={"1px"}
              fontWeight={600}
              fontSize={"0.8rem"}
            >
              Grab
            </Text>
          </Button>
        </Box>
      </CardFooter>
    </Card>
  );
}
