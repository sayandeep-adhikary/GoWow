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

const Links = [
  "Home",
  "About Us",
  "NGO",
  "Get Wow",
  "Be Wow",
  "Testimonials",
  "Gallery",
];

const NavLink = (props) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
      className={styles.navItems}
    >
      {children}
    </Box>
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
              display={{ base: "none", md: "flex" }}
              letterSpacing={"1px"}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
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
