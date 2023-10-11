import React, { useState } from "react";
import styles from "./OpportunityToggleBtn.module.css";
import { Button, ButtonGroup, Flex, Text } from "@chakra-ui/react";

export default function OpportunityToggleBtn(props) {
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
        case "completed":
            left = "10rem";
            break;
        case "verified":
            left = "20rem";
            break;
        case "rejected":
            left = "30rem";
            break;
        default:
            left = "0";
            break;
    }
    return left;
  }
  return (
    <Flex mb={"2rem"} alignItems={"center"} justifyContent={"start"} className={styles.container}>
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
            props.setShowView('completed');
          }}
          bg={"transparent"}
          aria-label="Add to friends"
          size={"sm"}
          className={styles.rightBtn}
          id="completed"
          color={button === "completed" ? "white" : "#5F5F5F"}
          py={6}
          px={4}
          h={'2rem'}
          w={'10rem'}
        >
          <Text mb={0}>Completed</Text>
        </Button>
        <Button
          onClick={(e) => {
            handleBtn(e);
            props.setShowView('verified');
          }}
          bg={"transparent"}
          aria-label="Add to friends"
          size={"sm"}
          className={styles.rightBtn}
          id="verified"
          color={button === "verified" ? "white" : "#5F5F5F"}
          py={6}
          px={4}
          h={'2rem'}
          w={'10rem'}
        >
          <Text mb={0}>Verified</Text>
        </Button>
        <Button
          onClick={(e) => {
            handleBtn(e);
            props.setShowView('rejected');
          }}
          bg={"transparent"}
          aria-label="Add to friends"
          size={"sm"}
          className={styles.rightBtn}
          id="rejected"
          color={button === "rejected" ? "white" : "#5F5F5F"}
          py={6}
          px={4}
          h={'2rem'}
          w={'10rem'}
        >
          <Text mb={0}>Rejected</Text>
        </Button>
      </ButtonGroup>
    </Flex>
  );
}
