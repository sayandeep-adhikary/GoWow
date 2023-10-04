import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Text,
  useColorModeValue,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { RxCrossCircled } from "react-icons/rx";
import styles from "./UserRegistration.module.css";
import { Link } from "react-router-dom";

export default function UserRegistration() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} bg={"color.1"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} px={6} minW={'55vw'}>
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
              User Registration
            </Text>
            <Link to="/" className={styles.crossIcon}>
              <RxCrossCircled
                color={"#5B4899"}
                size={30}
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
                <FormControl id="password">
                  <FormLabel fontWeight={600} style={{ letterSpacing: "1px" }}>
                    Password
                  </FormLabel>
                  <InputGroup>
                    <Input type={showPassword ? "text" : "password"} />
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
                <FormControl id="nameOfTheUser">
                  <FormLabel fontWeight={600} style={{ letterSpacing: "1px" }}>
                    Name of User
                  </FormLabel>
                  <Input type="text" placeholder="Rahul" />
                </FormControl>
              </div>
              <div className="col-sm-12 col-lg-6 my-2">
                <FormControl id="mobileNo">
                  <FormLabel fontWeight={600} style={{ letterSpacing: "1px" }}>
                    Mobile No
                  </FormLabel>
                  <Input type="text" placeholder="1234567890" />
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
                <FormControl id="firstName">
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
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"color.1"}
                color={"white"}
                _hover={{
                  color: "color.1",
                  bg: "white",
                }}
                style={{ letterSpacing: "1px" }}
                className={styles.createBtn}
                mt={10}
              >
                Create
              </Button>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
