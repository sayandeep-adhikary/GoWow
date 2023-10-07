import {
  Box,
  Flex,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import styles from "./BottomNav.module.css";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const Links = ["Home", "About Us", "NGO", "Get Wow", "Be Wow"];

const NavLinks = (props) => {
  const { children } = props;
  const getDomain = (str) => {
    let ans = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== " ") {
        ans += str[i];
      }
    }
    return ans.toLowerCase();
  };
  return (
    <NavLink className={styles.linkItem} to={`/${getDomain(children)}`}>
      <Box
        px={2}
        py={"0.8rem"}
        rounded={"md"}
        _hover={{
          textDecoration: "none",
          bg: useColorModeValue("gray.200", "gray.700"),
        }}
        className={styles.navItems}
        id={children}
      >
        {children}
      </Box>
    </NavLink>
  );
};

export default function BottomNav() {
  return (
    <>
      <Box bg={useColorModeValue("color.1", "color.1")} color={"white"} px={4}>
        <Flex h={14} alignItems={"center"}>
          <HStack spacing={8} alignItems={"center"} mx={"auto"}>
            <HStack
              as={"nav"}
              spacing={10}
              display={"flex"}
              letterSpacing={"1px"}
            >
              {Links.map((link) => (
                <NavLinks key={link}>{link}</NavLinks>
              ))}
              <NavHashLink
                className={styles.linkItem}
                to="/home#testimonial"
                // activeStyle={{ borderBottom: "5px solid white !important" }}
              >
                <Box
                  px={2}
                  py={"0.8rem"}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    bg: useColorModeValue("white", "gray.700"),
                  }}
                  className={styles.navItems}
                  id={"testimonials"}
                >
                  Testimonials
                </Box>
              </NavHashLink>
              <NavHashLink
                className={styles.linkItem}
                to="/home#gallery"
                // activeStyle={{ borderBottom: "5px solid white !important" }}
              >
                <Box
                  px={2}
                  py={"0.8rem"}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    bg: useColorModeValue("white", "gray.700"),
                  }}
                  href={"#gallery"}
                  className={styles.navItems}
                  id={"testimonials"}
                >
                  Gallery
                </Box>
              </NavHashLink>
            </HStack>
            <Flex>
              <Menu>
                <MenuButton
                  as={Button}
                  variant={"link"}
                  cursor={"pointer"}
                  bg={"white"}
                  h={7}
                  borderRadius={7}
                >
                  <RxHamburgerMenu
                    size={"1.5rem"}
                    color="black"
                    style={{ margin: "0 auto" }}
                  />
                </MenuButton>
                <MenuList color={"black"} borderRadius={15}>
                  <MenuItem>My Opportunities</MenuItem>
                  <MenuItem>Link 2</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </HStack>
        </Flex>
      </Box>
    </>
  );
}
