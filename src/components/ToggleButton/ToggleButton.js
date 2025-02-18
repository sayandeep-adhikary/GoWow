import React, { useState } from "react";
import styles from "./ToggleButton.module.css";
import { Button, ButtonGroup, Flex, Text } from "@chakra-ui/react";

export default function ToggleButton(props) {
  const [button, setButton] = useState("card");
  const handleBtn = (e) => {
    setButton(e.currentTarget.id);
  };
  const activeBtn = (button) =>{
    let left = "";
    switch (button) {
        case "card":
            left = "0";
            break;
        case "calendar":
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
            props.setShowView('card');
          }}
          bg={"transparent"}
          size={"sm"}
          className={styles.rightBtn}
          id="card"
          color={button === "card" ? "white" : "#5F5F5F"}
          py={6}
          px={4}
          h={'2rem'}
          w={'10rem'}

        >
          <Text mb={0}>Cards View</Text>
        </Button>
        <Button
          onClick={(e) => {
            handleBtn(e);
            props.setShowView('calendar');
          }}
          bg={"transparent"}
          aria-label="Add to friends"
          size={"sm"}
          className={styles.rightBtn}
          id="calendar"
          color={button === "calendar" ? "white" : "#5F5F5F"}
          py={6}
          px={4}
          h={'2rem'}
          w={'10rem'}
        >
          <Text mb={0}>Calendar View</Text>
        </Button>
      </ButtonGroup>
    </Flex>
  );
}
