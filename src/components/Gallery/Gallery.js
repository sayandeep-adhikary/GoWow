import React from "react";
import styles from "./Gallery.module.css";
import {
  Box,
  Button,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import gallery1 from "../../assets/gallery1.png";
import gallery2 from "../../assets/gallery2.png";
import gallery3 from "../../assets/gallery3.png";

export default function Gallery() {
  return (
    <Box bg={"#F7F6FD"} id="gallery">
      <Flex
        alignItems={"end"}
        justifyContent={"space-between"}
        px={20}
        className={styles.headingContainer}
      >
        <Text
          mb={0}
          fontFamily={"'Poppins', sans-serif"}
          fontSize={"2rem"}
          style={{ borderBottom: "3px solid #5B4899" }}
        >
          Gallery
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
      <Box px={20} py={10} className={`${styles.container} container-fluid`}>
        <div className="row">
          <div className="col-sm-12 col-lg-4 d-flex align-items-center justify-content-center mt-3">
            <Image src={gallery1} alt="gallery 1" />
          </div>
          <div className="col-sm-12 col-lg-4 d-flex align-items-center justify-content-center mt-3">
            <Image src={gallery1} alt="gallery 1" />
          </div>
          <div className="col-sm-12 col-lg-4 d-flex align-items-center justify-content-center mt-3">
            <Image src={gallery1} alt="gallery 1" />
          </div>
        </div>
        <div className="row my-3">
          <div className="col-sm-12 col-lg-8 d-flex align-items-center justify-content-center">
            <Image src={gallery2} alt="gallery 2" />
          </div>
          <div className="col-sm-12 col-lg-4 d-flex align-items-center justify-content-center my-3">
            <Image src={gallery3} alt="gallery 3" />
          </div>

        </div>
      </Box>
    </Box>
  );
}
