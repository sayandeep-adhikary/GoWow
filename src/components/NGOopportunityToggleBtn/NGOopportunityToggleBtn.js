import React, { useState } from "react";
import styles from "./NGOopportunityToggleBtn.module.css";
import { Button, ButtonGroup, Flex, Text } from "@chakra-ui/react";

export default function NGOopportunityToggleBtn(props) {
  const [button, setButton] = useState("current");
  const handleBtn = (e) => {
    setButton(e.currentTarget.id);
  };
  const activeBtn = (button) =>{
    let left = "";
    switch (button) {
        case "current":
            left = "0";
            break;
        case "closed":
            left = "10rem";
            break;
        default:
            left = "0";
            break;
    }
    return left;
  }
  return (
    <Flex mb={"2rem"} pl={20} alignItems={"center"} justifyContent={"start"} className={styles.container}>
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
            props.setShowView('current');
          }}
          bg={"transparent"}
          size={"sm"}
          className={styles.rightBtn}
          id="current"
          color={button === "current" ? "white" : "#5F5F5F"}
          py={6}
          px={4}
          h={'2rem'}
          w={'10rem'}

        >
          <Text mb={0}>Current</Text>
        </Button>
        <Button
          onClick={(e) => {
            handleBtn(e);
            props.setShowView('closed');
          }}
          bg={"transparent"}
          aria-label="Add to friends"
          size={"sm"}
          className={styles.rightBtn}
          id="closed"
          color={button === "closed" ? "white" : "#5F5F5F"}
          py={6}
          px={4}
          h={'2rem'}
          w={'10rem'}
        >
          <Text mb={0}>Closed</Text>
        </Button>
      </ButtonGroup>
    </Flex>
  );
}
