import React from "react";
import styles from "./Card.module.css";
import { Box, Image, Text } from "@chakra-ui/react";

export default function Card({ icon, count, text }) {
  return (
    <div className={`card text-center mx-2 ${styles.container}`} style={{ width: "11rem", borderRadius: '15px', borderColor: '#5B4899', cursor: 'pointer' }}>
      <Box className={styles.modalIcon} mx={'auto'} mt={4} pos={'relative'}>
        <Image src={icon} alt="user icon" className={styles.icon} pos={'absolute'}/>
      </Box>
      <div className="card-body px-0 py-2" style={{fontWeight: '700'}}>
        <Text className={`card-title ${styles.countText}`} style={{color: '#5B4899'}} fontSize={'2rem'}>{count}</Text>
        <Text className="card-text">{text}</Text>
      </div>
    </div>
  );
}
