import React from "react";
import styles from "./Card.module.css";
import { Box, Image, Text } from "@chakra-ui/react";

export default function Card({ icon, count, text }) {
  return (
    <div className="card text-center mx-2" style={{ width: "11rem", borderRadius: '15px' }}>
      <Box className={styles.modalIcon} mx={'auto'} mt={4}>
        <Image src={icon} alt="user icon" w={30} />
      </Box>
      <div className="card-body" style={{fontWeight: '700'}}>
        <Text className="card-title" style={{color: '#5B4899'}} fontSize={'2rem'}>{count}</Text>
        <Text className="card-text" letterSpacing={'1px'}>{text}</Text>
      </div>
    </div>
  );
}
