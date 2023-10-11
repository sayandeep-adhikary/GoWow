import React from "react";
import styles from "./Bewow.module.css";
import TopNav from "../TopNav/TopNav";
import BottomNav from "../BottomNav/BottomNav";
import { Box, Button, Container, Flex, Image, Text } from "@chakra-ui/react";
import rankBadge from "../../assets/rankBadge.png";
import ProfileCard from "./ProfileCard/ProfileCard";
import point from "../../assets/point.png";
import coin from "../../assets/coin.png";
import level from "../../assets/level.png";
import PeopleCard from "./PeopleCard/PeopleCard";
import Footer from "../Footer/Footer";

export default function Bewow() {
  return (
    <>
      <TopNav />
      <BottomNav />
      <Box bg={"#F7F6FD"} py={10}>
        <Container
          bg={"color.1"}
          minH={"15rem"}
          maxW={"35rem"}
          py={10}
          borderRadius={"xl"}
          pos={"relative"}
          className={styles.container}
        >
          <Box pos={"absolute"} className={styles.pointContainer}>
            <ProfileCard icon={point} text={"Points"} value={25} />
          </Box>
          <Box pos={"absolute"} className={styles.coinContainer}>
            <ProfileCard icon={coin} text={"Coins"} value={25} />
          </Box>
          <Box pos={"absolute"} className={styles.levelContainer}>
            <ProfileCard icon={level} text={"Level"} value={"Bronze V"} />
          </Box>
        </Container>
        <Flex
          alignItems={"end"}
          justifyContent={"space-between"}
          px={20}
          className={styles.rankContainer}
        >
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            gap={5}
            pt={40}
            pb={10}
          >
            <Text
              mb={0}
              fontFamily={"'Poppins', sans-serif"}
              fontSize={"1.6rem"}
              style={{ borderBottom: "3px solid #5B4899" }}
              className={styles.hiwText}
            >
              Rank
            </Text>
            <Image
              src={rankBadge}
              alt="rankBadge"
              w={"30%"}
              className="img-fluid"
            />
          </Flex>
        </Flex>
        <div className="container">
          <div className="row mb-5">
            <div className="col-sm-12 col-lg-6 d-flex align-items-center justify-content-center mb-5">
              <PeopleCard />
            </div>
            <div className="col-sm-12 col-lg-6 d-flex align-items-center justify-content-center mb-5">
              <PeopleCard />
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-sm-12 col-lg-6 d-flex align-items-center justify-content-center mb-5">
              <PeopleCard />
            </div>
            <div className="col-sm-12 col-lg-6 d-flex align-items-center justify-content-center mb-5">
              <PeopleCard />
            </div>
          </div>
        </div>
        <Flex justifyContent={'center'} >
            <Button bg={'color.1'} color={'white'} letterSpacing={'1px'} _hover={{bg: 'white', color: '#5B4899', border: '1px solid #5B4899'}} >
                View All LeaderBoard
            </Button>
        </Flex>
      </Box>
      <Footer />
    </>
  );
}
