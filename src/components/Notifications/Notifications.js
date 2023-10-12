import React from "react";
import styles from "./Notifications.module.css";
import TopNav from "../TopNav/TopNav";
import BottomNav from "../BottomNav/BottomNav";
import { Box } from "@chakra-ui/react";
import NotificationCard from "./NotificationCard/NotificationCard";
import Footer from "../Footer/Footer";

export default function Notifications() {
  return (
    <>
      <TopNav />
      <BottomNav />
      <Box px={20} py={5} bg={"#F7F6FD"} className={styles.container}>
        <NotificationCard />
      </Box>
      <Box px={20} py={5} bg={"#F7F6FD"} className={styles.container}>
        <NotificationCard />
      </Box>
      <Box px={20} py={5} bg={"#F7F6FD"} className={styles.container}>
        <NotificationCard />
      </Box>
      <Box px={20} py={5} bg={"#F7F6FD"} className={styles.container}>
        <NotificationCard />
      </Box>
      <Box px={20} py={5} bg={"#F7F6FD"} className={styles.container}>
        <NotificationCard />
      </Box>
      <Box px={20} py={5} bg={"#F7F6FD"} className={styles.container}>
        <NotificationCard />
      </Box>
      <Box px={20} py={5} bg={"#F7F6FD"} className={styles.container}>
        <NotificationCard />
      </Box>
      <Box px={20} pt={5} pb={20} bg={"#F7F6FD"} className={styles.container}>
        <NotificationCard />
      </Box>
      <Footer/>
    </>
  );
}
