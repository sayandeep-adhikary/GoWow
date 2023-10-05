import React from "react";
import styles from "./Header.module.css";
import { Box, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box className={styles.headerContainer} display={'flex'} alignItems={'center'} justifyContent={'center'}>
      <Text
        fontFamily={"'Roboto', sans-serif"}
        color={"white"}
        fontSize={"4rem"}
        fontWeight={'600'}
        textAlign={'center'}
      >
        Give Them a Helping <br /> Hand
      </Text>
    </Box>
  );
}
