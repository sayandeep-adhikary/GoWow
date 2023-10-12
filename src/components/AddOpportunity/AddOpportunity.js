import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Stack,
  Button,
  Text,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";
import { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import styles from "./AddOpportunity.module.css";
import { Link, useNavigate } from "react-router-dom";
import { BsArrowLeftCircle } from "react-icons/bs";

export default function AddOpportunity() {
  const [type, setType] = useState(null);
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
            <Container
              justifyContent={"center"}
              w={"60%"}
              className={styles.formContainer}
            >
              <FormControl isRequired textAlign={"center"} as={"fieldset"}>
                <FormLabel
                  as="legend"
                  fontWeight={600}
                  mb={5}
                  textAlign={"center"}
                >
                  Select Opportunity Type
                </FormLabel>
                <Box
                  className="card"
                  borderRadius={"lg"}
                  cursor={"pointer"}
                  bg={type === 'life saving' ? "rgba(216, 210, 255, 0.2)" :"#F6F6F6"}
                  _hover={{ bg: "rgba(216, 210, 255, 0.2)" }}
                  px={5}
                  fontWeight={600}
                  letterSpacing={"1px"}
                  my={5}
                  onClick={() => setType("life saving")}
                  border={'none'}
                >
                  <Flex justifyContent={"space-between"}>
                    <label
                      htmlFor="lifeSaving"
                      style={{
                        color: type === "life saving" ? "#5B4899" : "#8D8D8D",
                        marginBottom: 0,
                      }}
                    >
                      Life Saving
                    </label>
                    <input
                      type="radio"
                      name="forminput"
                      id="lifeSaving"
                      style={{ accentColor: "#5B4899", scale: "1.3" }}
                      checked={type === "life saving"}
                    />
                  </Flex>
                </Box>
                <Box
                  className="card"
                  borderRadius={"lg"}
                  cursor={"pointer"}
                  bg={type === 'material' ? "rgba(216, 210, 255, 0.2)" :"#F6F6F6"}
                  _hover={{ bg: "rgba(216, 210, 255, 0.2)" }}
                  px={5}
                  fontWeight={600}
                  letterSpacing={"1px"}
                  my={5}
                  onClick={() => setType("material")}
                  border={'none'}
                >
                  <Flex justifyContent={"space-between"}>
                    <label
                      htmlFor="Material"
                      style={{
                        color: type === "material" ? "#5B4899" : "#8D8D8D",
                        marginBottom: 0,
                      }}
                    >
                      Material
                    </label>
                    <input
                      type="radio"
                      name="forminput"
                      id="Material"
                      style={{ accentColor: "#5B4899", scale: "1.3" }}
                      checked={type === "material"}
                    />
                  </Flex>
                </Box>
                <Box
                  className="card"
                  borderRadius={"lg"}
                  cursor={"pointer"}
                  bg={type === 'volunteer' ? "rgba(216, 210, 255, 0.2)" :"#F6F6F6"}
                  _hover={{ bg: "rgba(216, 210, 255, 0.2)" }}
                  px={5}
                  fontWeight={600}
                  letterSpacing={"1px"}
                  my={5}
                  onClick={() => setType("volunteer")}
                  border={'none'}
                >
                  <Flex justifyContent={"space-between"}>
                    <label
                      htmlFor="Volunteer"
                      style={{
                        color: type === "volunteer" ? "#5B4899" : "#8D8D8D",
                        marginBottom: 0,
                      }}
                    >
                      Volunteer
                    </label>
                    <input
                      type="radio"
                      name="forminput"
                      id="Volunteer"
                      style={{ accentColor: "#5B4899", scale: "1.3" }}
                      checked={type === "volunteer"}
                    />
                  </Flex>
                </Box>
              </FormControl>
            </Container>
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
              Next
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
