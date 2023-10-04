import { Link } from "react-router-dom";
import {
  Flex,
  Box,
  Image,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Text,
  HStack,
  useColorModeValue,
  Select,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { RxCrossCircled } from "react-icons/rx";
import businessQr from "../../assets/businessQr.png";
import styles from "./NGORegistration.module.css";

export default function NGORegistration() {
  const [showPassword, setShowPassword] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} bg={"color.1"}>
      <Stack spacing={8} mx={"auto"} my={5} maxW={"lg"} px={6} minW={"60vw"}>
        <Box
          rounded={"2xl"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          pt={10}
          pb={2}
          px={10}
        >
          <Box className={styles.headerContainer}>
            <Text
              fontSize={"1.2rem"}
              textAlign={"center"}
              color={"color.1"}
              className={styles.hedingText}
              style={{ margin: "0" }}
              fontWeight={600}
            >
              NGO Registration
            </Text>
            <Link to="/" className={styles.crossIcon}>
              <RxCrossCircled
                color={"#5B4899"}
                size={25}
                style={{ cursor: "pointer" }}
              />
            </Link>
          </Box>
          <Stack my={10}>
            <div className="row">
              <div className="col-sm-12 col-lg-6 my-2">
                <FormControl id="role">
                  <FormLabel fontWeight={600} style={{ letterSpacing: "1px" }}>
                    Your Role
                  </FormLabel>
                  <Select placeholder="Select option">
                    <option value="Donor">Donor</option>
                    <option value="Volunteer">Volunteer</option>
                  </Select>
                </FormControl>
              </div>
              <div className="col-sm-12 col-lg-6 my-2">
                <FormControl id="business">
                  <FormLabel fontWeight={600} style={{ letterSpacing: "1px" }}>
                    Name of NGO
                  </FormLabel>
                  <Input type="text" placeholder="Welfare Society" />
                </FormControl>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-lg-6 my-2">
                <FormControl id="userName">
                  <FormLabel fontWeight={600} style={{ letterSpacing: "1px" }}>
                    User Name
                  </FormLabel>
                  <Input type="text" placeholder="Rahul" />
                </FormControl>
              </div>
              <div className="col-sm-12 col-lg-6 my-2">
                <FormControl id="password">
                  <FormLabel fontWeight={600} style={{ letterSpacing: "1px" }}>
                    Password
                  </FormLabel>
                  <InputGroup>
                    <Input type={showPassword ? "text" : "password"} placeholder="********"/>
                    <InputRightElement h={"full"}>
                      <Button
                        variant={"ghost"}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }
                      >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-lg-6 my-2">
                <FormControl id="mobileNo">
                  <FormLabel fontWeight={600} style={{ letterSpacing: "1px" }}>
                    Mobile No
                  </FormLabel>
                  <Input type="text" placeholder="1234567890" />
                </FormControl>
              </div>
              <div className="col-sm-12 col-lg-6 my-2">
                <FormControl id="city">
                  <FormLabel fontWeight={600} style={{ letterSpacing: "1px" }}>
                    City
                  </FormLabel>
                  <Select placeholder="Select option">
                    <option value="Kolkata">Kolkata</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Bangalore">Bangalore</option>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-lg-6 my-2">
                <FormControl id="location">
                  <FormLabel fontWeight={600} style={{ letterSpacing: "1px" }}>
                    Location
                  </FormLabel>
                  <Select placeholder="Select option">
                    <option value="Kolkata">Kolkata</option>
                    <option value="Mumbai">Mumbai</option>
                  </Select>
                </FormControl>
              </div>
              <div className="col-sm-12 col-lg-6 my-2">
                <FormControl id="address">
                  <FormLabel fontWeight={600} style={{ letterSpacing: "1px" }}>
                    Address
                  </FormLabel>
                  <Select placeholder="Select option">
                    <option value="Delhi">Delhi</option>
                    <option value="Hyderabad">Hyderabad</option>
                  </Select>
                </FormControl>
              </div>
            </div>
            <Button
              loadingText="Submitting"
              size="lg"
              borderRadius={'xl'}
              bg={"color.1"}
              color={"white"}
              _hover={{
                color: "color.1",
                bg: "white",
              }}
              style={{ letterSpacing: "1px" }}
              className={styles.createBtn}
              mt={10}
              onClick={onOpen}
            >
              Create
            </Button>
          </Stack>
        </Box>
      </Stack>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"} my={5} color={"color.1"}>
            Generate QR
          </ModalHeader>
          <ModalCloseButton color={'color.1'} style={{borderRadius: '50%', border: '2px solid #5B4899'}} />
          <ModalBody align="center">
            <Image src={businessQr} alt="QR" />
          </ModalBody>
          <ModalFooter justifyContent={"center"} alignItems={'center'}>
            <HStack>
            <Button
              type="submit"
              bg={"color.1"}
              color={"white"}
              _hover={{
                color: "color.1",
                bg: "white",
              }}
              style={{ letterSpacing: "1px" }}
              className={styles.downloadBtn}
              width={150}
            >
              Download
            </Button>
            <Button
              color={"color.1"}
              _hover={{
                color: "white",
                bg: "color.1",
              }}
              variant={"outline"}
              style={{ letterSpacing: "1px" }}
              className={styles.shareBtn}
              width={150}
            >
              Share
            </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}
