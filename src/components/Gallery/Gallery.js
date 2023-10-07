import React from "react";
// import styles from "./Gallery.module.css";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import gallery1 from "../../assets/gallery1.png";
import gallery2 from "../../assets/gallery2.png";
import gallery3 from "../../assets/gallery3.png";

export default function Gallery() {
  return (
    <Box bg={"#F7F6FD"} id="gallery">
      <Flex alignItems={"end"} justifyContent={"space-between"} px={20} pb={10}>
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
      <Box>
        <Grid
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(3, 1fr)"
          gap={4}
          px={20}
        >
          <GridItem colSpan={1} borderRadius={"10px"}>
            <Image src={gallery1} alt="gallery 1" />
          </GridItem>
          <GridItem colSpan={1} borderRadius={"10px"}>
            <Image src={gallery1} alt="gallery 1" />
          </GridItem>
          <GridItem colSpan={1} borderRadius={"10px"}>
            <Image src={gallery1} alt="gallery 1" />
          </GridItem>
          <GridItem colSpan={2} borderRadius={"10px"}>
            <Image src={gallery2} alt="gallery 2" />
          </GridItem>
          <GridItem colSpan={1} borderRadius={"10px"}>
            <Image src={gallery3} alt="gallery 3" />
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}
