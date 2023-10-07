import React from "react";
import TopNav from "../TopNav/TopNav";
import BottomNav from "../BottomNav/BottomNav";
import aboutImg from "../../assets/aboutImg.png";
import { Box, Image, Text } from "@chakra-ui/react";
import HowItWorks from "../HowItWorks/HowItWorks";
import Footer from "../Footer/Footer";
import Testimonials from "../Home/Testimonials/Testimonials";


export default function About() {
  return (
    <>
      <TopNav />
      <BottomNav />
      <Box className="py-5" bg={'#F7F6FD'} px={20}>
        <div className="row">
          <div className="col-sm-12 col-lg-6 d-flex flex-column align-items-start justify-content-start">
            <Text
              fontSize={"2rem"}
              borderBottom={"3px solid #5B4899"}
              letterSpacing={"1px"}
            >
              About GoWow!!
            </Text>
            <Text fontSize={"1rem"} mt={5} pr={10} color={'3C3C3C'} lineHeight={'2rem'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Parturient lorem purus justo, ultricies. Sollicitudin odio
              elementum urna placerat lacus, vulputate. Non malesuada viverra et
              ultrices cras. Tincidunt tempor, blandit augue ac feugiat.
              Praesent arcu tempus ullamcorper quisque in. Magna fermentum,
              lacus, fermentum arcu. <br /> <br />
              Vulputate pellentesque proin facilisis dignissim gravida sed
              faucibus nunc. Nunc eget pharetra, in vitae porta lacus. Elit in
              nisl, in quis nulla tellus suscipit id. Semper velit odio cras
              pretium tristique habitant. Elit eu penatibus congue orci turpis.
              Enim diam id.
            </Text>
          </div>
          <div className="col-sm-12 col-lg-6 d-flex align-items-center justify-content-center">
            <Image
              src={aboutImg}
              alt="about"
              boxShadow={"-10px -10px #5B4899"}
              borderRadius={"10px"}
            />
          </div>
        </div>
      </Box>
      <HowItWorks/>
      <Footer/>
    </>
  );
}
