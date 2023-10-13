import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Stack,
  Button,
  Text,
  useColorModeValue,
  Input,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import styles from "./Volunteers.module.css";
import { Link, useNavigate } from "react-router-dom";
import { BsArrowLeftCircle } from "react-icons/bs";

export default function Volunteers() {
  const navigate = useNavigate();
  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} bg={"color.1"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} px={6} minW={"55vw"}>
        <Box
          rounded={"2xl"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          pt={10}
          pb={2}
          px={10}
        >
          <Box className={styles.headerContainer}>
            <BsArrowLeftCircle
              color={"#5B4899"}
              size={30}
              style={{ cursor: "pointer" }}
              className={styles.backBtn}
              onClick={() => navigate(-1)}
            />
            <Text
              fontSize={"1.2rem"}
              textAlign={"center"}
              color={"color.1"}
              className={styles.hedingText}
              style={{ margin: "0" }}
              fontWeight={600}
            >
              Add New Opportunity
            </Text>
            <Link to="/home" className={styles.crossIcon}>
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
                <FormControl id="category">
                  <FormLabel fontWeight={600} style={{ letterSpacing: "1px" }}>
                    Opportunity Category
                  </FormLabel>
                  <Select placeholder="Education">
                    <option value="Donor">Donor</option>
                    <option value="Volunteer">Volunteer</option>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-lg-6 my-2">
                <FormControl id="description">
                  <FormLabel fontWeight={600} style={{ letterSpacing: "1px" }}>
                    Opportunity Description
                  </FormLabel>
                  <Input type="text" placeholder="abcdlmnop" />
                </FormControl>
              </div>
              <div className="col-sm-12 col-lg-6 my-2">
                <FormControl id="subject">
                  <FormLabel fontWeight={600} style={{ letterSpacing: "1px" }}>
                    Opportunity Subject
                  </FormLabel>
                  <Input type="text" placeholder="Rahul" />
                </FormControl>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-lg-6 my-2">
                <FormControl id="description">
                  <FormLabel fontWeight={600} style={{ letterSpacing: "1px" }}>
                    Event Start Date
                  </FormLabel>
                  <Input type="date" />
                </FormControl>
              </div>
              <div className="col-sm-12 col-lg-6 my-2">
                <FormControl id="subject">
                  <FormLabel fontWeight={600} style={{ letterSpacing: "1px" }}>
                    Event End Date
                  </FormLabel>
                  <Input type="date" />
                </FormControl>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-lg-6 my-2">
                <FormControl id="venue">
                  <FormLabel fontWeight={600} style={{ letterSpacing: "1px" }}>
                    Event Venue
                  </FormLabel>
                  <Input type="text" placeholder="Indore" />
                </FormControl>
              </div>
              <div className="col-sm-12 col-lg-6 my-2">
                <FormControl id="number">
                  <FormLabel fontWeight={600} style={{ letterSpacing: "1px" }}>
                    Contact Number
                  </FormLabel>
                  <Input type="number" placeholder="1234567890" />
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
