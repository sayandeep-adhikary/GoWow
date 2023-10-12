import { Link } from "react-router-dom";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  HStack,
  Button,
  Text,
  useColorModeValue,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import logo from "../../assets/logo.png";
import userIcon from "../../assets/userIcon.png";
import businessIcon from "../../assets/businessIcon.png";
import donateIcon from "../../assets/donateIcon.png";
import styles from "./Login.module.css";

export default function Login({setIsUser}) {
  const selectRoleModal = useDisclosure();
  const selectRoleLogin = useDisclosure();
  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} bg={"color.1"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} minW={"35vw"}>
        <Box
          rounded={"2xl"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"0 0 15px black"}
          pt={8}
          pb={5}
          px={"3rem"}
        >
          <Stack textAlign={"center"}>
            <Image src={logo} alt="gowow logo" width={100} mx={"auto"} />
            <Text fontSize={"lg"} color={"color.1"} my={2}>
              Welcome to GoWow!!
            </Text>
          </Stack>
          <Stack spacing={4} my={5}>
            <FormControl id="username">
              <FormLabel fontWeight={700}>User Name</FormLabel>
              <Input
                type="text"
                placeholder="Name"
                bg={"F6F6F6"}
                minW={"100%"}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel fontWeight={700}>Password</FormLabel>
              <Input type="password" placeholder="*******" />
            </FormControl>
            <Stack spacing={2}>
              <Link
                to="/home"
                style={{ textDecoration: "none", color: "inherit" }}
              >
              </Link>
                <Button
                  type="submit"
                  bg={"color.1"}
                  color={"white"}
                  _hover={{
                    color: "color.1",
                    bg: "white",
                  }}
                  style={{ letterSpacing: "1px" }}
                  className={styles.loginBtn}
                  minW={'100%'}
                  onClick={selectRoleLogin.onOpen}
                >
                  Log in
                </Button>
              <a
                href="https://varlyq.com"
                target="_blank"
                rel="noreferrer"
                className={styles.forgotPass}
              >
                <Text color={"#E8711F"} textAlign={"center"}>
                  Forgot password?
                </Text>
              </a>
              <Button
                color={"color.1"}
                _hover={{
                  color: "white",
                  bg: "color.1",
                }}
                variant={"outline"}
                mb={2}
                style={{ letterSpacing: "1px" }}
                className={styles.outlineBtn}
                onClick={selectRoleModal.onOpen}
              >
                First time User?
              </Button>
              <Button
                color={"color.1"}
                _hover={{
                  color: "white",
                  bg: "color.1",
                }}
                variant={"outline"}
                style={{ letterSpacing: "1px" }}
                className={styles.outlineBtn}
                onClick={selectRoleModal.onOpen}
              >
                Create New Account
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>

      {/* Select Role Modal */}
      <Modal
        isOpen={selectRoleModal.isOpen}
        onClose={selectRoleModal.onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader align="center">
            <Text my={5}>Select Role</Text>
            <Text fontSize={"1.5rem"} color={"color.1"}>
              Welcome to GoWow!!
            </Text>
            <Text px={8} fontSize={"1rem"} color={"color.3"} fontWeight={400}>
              Please let us Know How you want to change the world.
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Link
              to="/user-registration"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <HStack
                spacing={5}
                align={"center"}
                className={styles.modalItem}
                cursor={"pointer"}
              >
                <Box className={styles.modalIcon}>
                  <Image src={userIcon} alt="user icon" w={30} />
                </Box>
                <Stack spacing={0}>
                  <Text mb={0} fontWeight={900}>
                    User ( Donor/Volunteer )
                  </Text>
                  <Text mb={0} fontSize={"0.8rem"} pr={10} color={"color.3"}>
                    Register as a user to help, donate or volunteer for others.
                  </Text>
                </Stack>
              </HStack>
            </Link>
            <Link
              to="/business-registration"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <HStack
                spacing={5}
                align={"center"}
                className={styles.modalItem}
                cursor={"pointer"}
              >
                <Box className={styles.modalIcon}>
                  {/* <GoPeople color="#E8711F" size={30}/> */}
                  <Image src={businessIcon} alt="user icon" w={30} />
                </Box>
                <Stack spacing={0}>
                  <Text mb={0} fontWeight={900}>
                    Business
                  </Text>
                  <Text mb={0} fontSize={"0.8rem"} pr={10} color={"color.3"}>
                    Register as a Business to contibute to the cause.
                  </Text>
                </Stack>
              </HStack>
            </Link>
            <Link
              to="/ngo-registration"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <HStack
                spacing={5}
                align={"center"}
                className={styles.modalItem}
                cursor={"pointer"}
              >
                <Box className={styles.modalIcon}>
                  {/* <GoPeople color="#E8711F" size={30}/> */}
                  <Image src={donateIcon} alt="user icon" w={30} />
                </Box>
                <Stack spacing={0}>
                  <Text mb={0} fontWeight={900}>
                    NGO
                  </Text>
                  <Text mb={0} fontSize={"0.8rem"} pr={10} color={"color.3"}>
                    Register as an NGO to provide apportunities to everyone.
                  </Text>
                </Stack>
              </HStack>
            </Link>
          </ModalBody>
        </ModalContent>
      </Modal>
      {/* Select Role Login */}
      <Modal
        isOpen={selectRoleLogin.isOpen}
        onClose={selectRoleLogin.onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader align="center">
            <Text my={5}>Select Role to Login</Text>
            <Text fontSize={"1.5rem"} color={"color.1"}>
              Welcome Again to GoWow!!
            </Text>
            <Text px={8} fontSize={"1rem"} color={"color.3"} fontWeight={400}>
              Please let us Know How you want to change the world.
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Link
              to="/home"
              style={{ textDecoration: "none", color: "inherit" }}
              onClick={()=>setIsUser(true)}
            >
              <HStack
                spacing={5}
                align={"center"}
                className={styles.modalItem}
                cursor={"pointer"}
              >
                <Box className={styles.modalIcon}>
                  <Image src={userIcon} alt="user icon" w={30} />
                </Box>
                <Stack spacing={0}>
                  <Text mb={0} fontWeight={900}>
                    User ( Donor/Volunteer )
                  </Text>
                  <Text mb={0} fontSize={"0.8rem"} pr={10} color={"color.3"}>
                    Login as a user to help, donate or volunteer for others.
                  </Text>
                </Stack>
              </HStack>
            </Link>
            <Link
              to="/home"
              style={{ textDecoration: "none", color: "inherit" }}
              onClick={()=>setIsUser(false)}
            >
              <HStack
                spacing={5}
                align={"center"}
                className={styles.modalItem}
                cursor={"pointer"}
              >
                <Box className={styles.modalIcon}>
                  <Image src={donateIcon} alt="user icon" w={30} />
                </Box>
                <Stack spacing={0}>
                  <Text mb={0} fontWeight={900}>
                    NGO
                  </Text>
                  <Text mb={0} fontSize={"0.8rem"} pr={10} color={"color.3"}>
                    Login as an NGO to provide apportunities to everyone.
                  </Text>
                </Stack>
              </HStack>
            </Link>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
}
