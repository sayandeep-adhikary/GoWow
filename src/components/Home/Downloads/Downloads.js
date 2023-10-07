import React from "react";
import styles from "./Downloads.module.css";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import downloadIos from "../../../assets/downloadIos.png";
import downloadAndroid from "../../../assets/downloadAndroid.png";

export default function Downloads() {
  return (
    <Box bg={"#F7F6FD"} py={10}>
      <Flex
        alignItems={"start"}
        justifyContent={"space-between"}
        px={20}
        flexDir={"column"}
      >
        <Text
          mb={0}
          fontFamily={"'Poppins', sans-serif"}
          fontSize={"2rem"}
          style={{ borderBottom: "3px solid #5B4899" }}
        >
          Download The App Now !
        </Text>
        <Box>
          <Text
            mt={10}
            fontFamily={"'Montserrat', sans-serif"}
            fontSize={"1rem"}
            lineHeight={"1.8rem"}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Sit
            non neque orci amet, amet .
          </Text>
        </Box>
      </Flex>
      <Box px={10} pb={20}>
        <div className="row">
          <div className="col-sm-12 col-lg-6 d-flex align-items-start">
            <Image src={downloadIos} alt="download ios" />
          </div>
          <div className="col-sm-12 col-lg-6 d-flex align-items-end">
            <Image src={downloadAndroid} alt="download android" />
          </div>
        </div>
      </Box>
    </Box>
  );
}
