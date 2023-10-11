import React, { useState } from "react";
import styles from "./OpportunityDetails.module.css";
import TopNav from "../TopNav/TopNav";
import BottomNav from "../BottomNav/BottomNav";
import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Stack,
  Text,
  VisuallyHidden,
  useColorModeValue,
  chakra,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import logo from "../../assets/NGOLogo.png";
import image from "../../assets/opportunityImg.png";
import confirmImg from "../../assets/confirmImg.png";
import confirmedImg from "../../assets/confirmedImg.png";
import { FiPhoneCall } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import Footer from "../Footer/Footer";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={"#F7F6FD"}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
      boxShadow={"0 3px 7px grey"}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};
const BeforeConfirm = ({ onClose, setConfirm }) => {
  return (
    <Stack align={"center"}>
      <Image
        className="img-fluid"
        src={confirmImg}
        alt="confirm page"
        mx={"auto"}
        py={5}
        w={"50%"}
      />
      <Text fontWeight={600} fontSize={"1.5rem"}>
        Confirm Grab ?
      </Text>
      <Text fontWeight={600} fontSize={"0.7rem"}>
        Are you sure that you want to grab this opportunity ?
      </Text>
      <Flex gap={10}>
        <Button
          type="solid"
          color={"white"}
          bg={"color.1"}
          letterSpacing={"1px"}
          _hover={{
            bg: "white",
            color: "color.1",
            border: "1px solid #5B4899",
          }}
          h={"2.5rem"}
          w={"6rem"}
          onClick={()=>setConfirm(true)}
        >
          Yes
        </Button>
        <Button
          type="solid"
          color={"color.1"}
          bg={"white"}
          border={"1px solid #5B4899"}
          letterSpacing={"1px"}
          _hover={{
            bg: "color.1",
            color: "white",
          }}
          h={"2.5rem"}
          w={"6rem"}
          onClick={onClose}
        >
          No
        </Button>
      </Flex>
    </Stack>
  );
};
const AfterConfirm = ({ onClose }) => {
  return (
    <Stack align={"center"}>
      <Image
        className="img-fluid"
        src={confirmedImg}
        alt="confirm page"
        mx={"auto"}
        w={"50%"}
      />
      <Text fontWeight={600} fontSize={"0.7rem"} align={'center'}>
      You have Successfully grabbed the opportunity.Please perform it by the mentioned date and then Mark it as complete from my opportunities’page.
      </Text>
      <Button
        type="solid"
        color={"white"}
        bg={"color.1"}
        letterSpacing={"1px"}
        _hover={{
          bg: "white",
          color: "color.1",
          border: "1px solid #5B4899",
        }}
        h={"2.5rem"}
        w={"6rem"}
        onClick={onClose}
      >
        OK
      </Button>
    </Stack>
  );
};
export default function OpportunityDetails() {
  const [confirm, setConfirm] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <TopNav />
      <BottomNav />
      <Box
        className={`container-fluid ${styles.container}`}
        bg={"#F7F6FD"}
        px={20}
        py={20}
      >
        <div
          class="card text-center py-5 px-0"
          style={{ borderRadius: "10px" }}
        >
          <div
            class="card-header container"
            style={{ backgroundColor: "white" }}
          >
            <div className="row">
              <div className="col-sm-12 col-lg-6 d-flex align-items-center justify-content-center mb-4">
                <Flex gap={5}>
                  <Image
                    src={logo}
                    alt="logo"
                    className="img-fluid"
                    w={"5rem"}
                  />
                  <Box
                    className="d-flex flex-column align-items-start"
                    justifyContent={"space-evenly"}
                  >
                    <Text mb={0} textAlign={"left"}>
                      Prabhu Agya Foundation
                    </Text>
                    <Text mb={0} fontSize={"0.8rem"} className="text-muted">
                      26 Jan 2023
                    </Text>
                  </Box>
                </Flex>
              </div>
              <div className="col-sm-12 col-lg-6 d-flex align-items-center justify-content-center mb-4">
                <Text fontWeight={600} mb={0}>
                  Blood Donation Camp
                </Text>
              </div>
            </div>
          </div>
          <Image
            src={image}
            class="img-fluid"
            alt="opportunity"
            w={"90%"}
            mx={"auto"}
            my={5}
          />
          <div class="card-body" style={{ paddingBottom: "3rem" }}>
            <div className="container">
              <div className="row my-3">
                <Box className="col-sm-12 col-lg-8 d-flex flex-column align-items-start">
                  <Text
                    letterSpacing={"1px"}
                    fontWeight={600}
                    color={"color.1"}
                    mb={0}
                  >
                    Description
                  </Text>
                  <br />
                  <Text letterSpacing={"1px"} fontWeight={600} align={"left"}>
                    Prabhu Agya Foundation is organizing blood donation camp.
                  </Text>
                </Box>
                <Box
                  className={`col-sm-12 col-lg-4 d-flex align-items-center ${styles.buttonContainer}`}
                  justifyContent={"flex-end"}
                >
                  <Button
                    type="solid"
                    color={"white"}
                    bg={"color.1"}
                    letterSpacing={"1px"}
                    _hover={{
                      border: "1px solid #5B4899",
                      bg: "white",
                      color: "#5B4899",
                    }}
                  >
                    View Map
                  </Button>
                </Box>
              </div>
              <div className="row my-5">
                <Box className="col-sm-12 col-lg-8 d-flex flex-column align-items-start">
                  <Text
                    letterSpacing={"1px"}
                    fontWeight={600}
                    color={"color.1"}
                    mb={0}
                  >
                    Category
                  </Text>
                  <br />
                  <Button
                    type="solid"
                    color={"white"}
                    bg={"color.1"}
                    letterSpacing={"1px"}
                    _hover={{
                      bg: "color.1",
                      color: "white",
                    }}
                  >
                    Life Saving
                  </Button>
                </Box>
              </div>
            </div>
          </div>
          <Container>
            <Box
              className="card"
              borderRadius={"xl"}
              pos={"relative"}
              boxShadow={"0 0 5px grey"}
            >
              <div className="card-body">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12 col-lg-6 my-4">
                      <Stack align={"center"} gap={10}>
                        <Text
                          letterSpacing={"1px"}
                          fontWeight={600}
                          color={"color.1"}
                          mb={0}
                        >
                          Contact Details
                        </Text>
                        <SocialButton label={"call"}>
                          <FiPhoneCall color="#E8711F" />
                        </SocialButton>
                        <Text letterSpacing={"1px"} fontWeight={600} mb={0}>
                          99770344000
                        </Text>
                      </Stack>
                    </div>
                    <div className="col-sm-12 col-lg-6 my-4">
                      <Stack align={"center"} gap={10}>
                        <Text
                          letterSpacing={"1px"}
                          fontWeight={600}
                          color={"color.1"}
                          mb={0}
                        >
                          Venue
                        </Text>
                        <SocialButton label={"location"}>
                          <SlLocationPin color="#E8711F" />
                        </SocialButton>
                        <Text letterSpacing={"1px"} fontWeight={600} mb={0}>
                          29 A Shanti Nagar, Mhow Gaon, Mhow
                        </Text>
                      </Stack>
                    </div>
                  </div>
                </div>
              </div>
              <Flex
                justifyContent={"center"}
                gap={5}
                pos={"absolute"}
                className={styles.btnContainer}
              >
                <Button
                  type="solid"
                  color={"white"}
                  bg={"color.1"}
                  letterSpacing={"1px"}
                  _hover={{
                    bg: "white",
                    color: "color.1",
                    border: "1px solid #5B4899",
                  }}
                  h={"2.5rem"}
                  w={"6rem"}
                  onClick={() => {onOpen(); setConfirm(false)}}
                >
                  Grab
                </Button>
                <Button
                  type="solid"
                  color={"color.1"}
                  bg={"white"}
                  border={"1px solid #5B4899"}
                  letterSpacing={"1px"}
                  _hover={{
                    bg: "color.1",
                    color: "white",
                  }}
                  h={"2.5rem"}
                  w={"6rem"}
                >
                  Share
                </Button>
              </Flex>
            </Box>
          </Container>
        </div>
      </Box>
      <Footer />
      <Modal onClose={onClose} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton
            color={"color.1"}
            style={{ borderRadius: "50%", border: "2px solid #5B4899" }}
            _hover={{ bg: "#5B4899", color: "white" }}
          />
          <ModalBody py={10}>
            {confirm ? (
              <AfterConfirm onClose={onClose} />
            ) : (
              <BeforeConfirm onClose={onClose} setConfirm={setConfirm}/>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
