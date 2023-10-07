import React, { useState } from "react";
import styles from "./Testimonials.module.css";
import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import HIWToggleBtn from "../../HIWToggleBtn/HIWToggleBtn";
import Carousel from "./Carousel/Carousel";

export default function Testimonials() {
  const [showView, setShowView] = useState("donors");
  return (
    <Box backgroundColor={'#F7F6FD'} id="testimonial">
      <Flex alignItems={"end"} justifyContent={"space-between"} px={20}>
        <Text
          mb={0}
          fontFamily={"'Poppins', sans-serif"}
          fontSize={"2rem"}
          style={{ borderBottom: "3px solid #5B4899" }}
        >
          Testimonials
        </Text>
      </Flex>
      <Container py={20}>
        <HIWToggleBtn setShowView={setShowView} />
      </Container>
      <Box>
        <Carousel/>
      </Box>
    </Box>
  );
}
