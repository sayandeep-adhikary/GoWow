import React, { useState } from "react";
// import styles from "./OpportunityCard.module.css";
import {
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
import { BsChat } from "react-icons/bs";
import NGOLogo from "../../../assets/NGOLogo.png";
import opportunityImg from "../../../assets/opportunityImg.png";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";

export default function MyOpportunityCard({ isUser }) {
  const [like, setLike] = useState(false);
  return (
    <Card
      maxW="xl"
      my={5}
      borderRadius={"2xl"}
      fontSize={"0.8rem"}
      boxShadow={"0 0 5px grey"}
    >
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
            {like ? (
              <AiFillLike
                size={24}
                color="#5B4899"
                cursor={"pointer"}
                onClick={() => setLike((prev) => !prev)}
              />
            ) : (
              <AiOutlineLike
                size={24}
                color="#5B4899"
                cursor={"pointer"}
                onClick={() => setLike((prev) => !prev)}
              />
            )}
            <Text mb={0}>4.5K</Text>
          </Flex>
          <Flex px={0} alignItems={"center"} gap={2} fontWeight={"600"}>
            <BsChat size={20} color="#5B4899" cursor={"pointer"} />
            <Text mb={0}>150</Text>
          </Flex>
        </Box>
        {isUser ? (
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
              Complete
            </Text>
          </Button>
        ) : (
          <Button
            color={"color.1"}
            bg={"white"}
            border={"1px solid #5B4899"}
            _hover={{
              bg: "color.1",
              color: "white",
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
              Share
            </Text>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
