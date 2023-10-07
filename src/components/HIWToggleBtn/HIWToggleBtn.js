import React, { useState } from "react";
import styles from "./HIWToggleBtn.module.css";
import { Button, ButtonGroup, Flex, Text } from "@chakra-ui/react";

export default function HIWToggleBtn(props) {
  const [button, setButton] = useState("donors");
  const handleBtn = (e) => {
    setButton(e.currentTarget.id);
  };
  const activeBtn = (button) =>{
    let left = "";
    switch (button) {
        case "donors":
            left = "0";
            break;
        case "ngo":
            left = "10rem";
            break;
        case "business":
            left = "20rem";
            break;
        default:
            left = "0";
            break;
    }
    return left;
  }
  return (
    <Flex pl={20} alignItems={"center"} justifyContent={"start"}>
      <ButtonGroup
        isAttached
        variant="outline"
        bg={"#EEEDF4"}
        className={styles.buttonContainer}
      >
        <div
          id={"btn"}
          className={styles.btn}
          style={{ left: activeBtn(button) }}
        ></div>
        <Button
          onClick={(e) => {
            handleBtn(e);
            props.setShowView('donors');
          }}
          bg={"transparent"}
          size={"sm"}
          className={styles.rightBtn}
          id="donors"
          color={button === "donors" ? "white" : "#5F5F5F"}
          py={6}
          px={4}
          h={'2rem'}
          w={'10rem'}

        >
          <Text mb={0}>Donors</Text>
        </Button>
        <Button
          onClick={(e) => {
            handleBtn(e);
            props.setShowView('ngo');
          }}
          bg={"transparent"}
          aria-label="Add to friends"
          size={"sm"}
          className={styles.rightBtn}
          id="ngo"
          color={button === "ngo" ? "white" : "#5F5F5F"}
          py={6}
          px={4}
          h={'2rem'}
          w={'10rem'}
        >
          <Text mb={0}>Ngos</Text>
        </Button>
        <Button
          onClick={(e) => {
            handleBtn(e);
            props.setShowView('business');
          }}
          bg={"transparent"}
          aria-label="Add to friends"
          size={"sm"}
          className={styles.rightBtn}
          id="business"
          color={button === "business" ? "white" : "#5F5F5F"}
          py={6}
          px={4}
          h={'2rem'}
          w={'10rem'}
        >
          <Text mb={0}>Businesses</Text>
        </Button>
      </ButtonGroup>
    </Flex>
  );
}
