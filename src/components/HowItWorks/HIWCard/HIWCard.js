import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import styles from "./Card.module.css";
import ellipse from "../../../assets/HIWEllipse.png";

export default function HIWCard({ count, heading, text }) {
  return (
    <Card
      maxW={"sm"}
      align={"center"}
      borderBottom={"10px solid #5B4899"}
      pos={"relative"}
      boxShadow={"0 0 2px grey"}
      my={10}
    >
      <Image src={ellipse} w={"7rem"} pos={"absolute"} top={"-3.5rem"} />
      <Text
        color={"white"}
        zIndex={5}
        pos={"absolute"}
        fontSize={"2rem"}
        fontFamily={"'Montserrat', sans-serif"}
        fontWeight={600}
        top={0}
        left={"50%"}
        transform={"translate(-50%, -50%)"}
      >
        {count}
      </Text>
      <CardHeader></CardHeader>
      <CardBody textAlign={"center"}>
        <Heading
          size="md"
          color={"color.1"}
          fontFamily={"'Poppins', sans-serif"}
          lineHeight={'1.7rem'}
        >
          {heading} ?
        </Heading>
        <Text
          fontFamily={"'Roboto', sans-serif"}
          fontSize={"0.8rem"}
          px={5}
          color={"#7E7E7E"}
        >
          {text}
        </Text>
      </CardBody>
    </Card>
  );
}
