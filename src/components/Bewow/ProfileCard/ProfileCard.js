import React from "react";
import styles from "./ProfileCard.module.css";
import { Box, Button, Image, Text } from "@chakra-ui/react";

export default function ProfileCard({ icon, text, value }) {
  return (
    <Box
      className={`card text-center mx-2 ${styles.container}`}
      style={{
        width: "8rem",
        borderRadius: "15px",
        borderColor: "#5B4899",
        cursor: "pointer",
      }}
      pos={"relative"}
    >
      <Box className={styles.modalIcon} mx={"auto"} mt={4} pos={"absolute"}>
        <Image
          src={icon}
          alt="user icon"
          className={styles.icon}
          pos={"absolute"}
        />
      </Box>
      <Box
        className="card-body px-0 pt-5 pb-3"
        style={{ fontWeight: "700" }}
        py={"auto"}
      >
        <Text
          className={`card-title ${styles.countText}`}
          fontSize={"1rem"}
          mb={0}
          py={"auto"}
          letterSpacing={"1px"}
        >
          {text}
        </Text>
      </Box>
      <Button
        color={"white"}
        bg={"color.1"}
        fontSize={"1.2rem"}
        letterSpacing={"1px"}
        _hover={{ bg: "white", color: "color.1", border: "1px solid #5B4899" }}
        className={`${styles.countText}`}
      >
        {value}
      </Button>
    </Box>
  );
}
