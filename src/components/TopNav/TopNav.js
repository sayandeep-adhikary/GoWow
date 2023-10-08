import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  InputGroup,
  InputLeftElement,
  Input,
  Stack,
  Badge,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SearchIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { VscBellDot } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import styles from "./TopNav.module.css";
import { NavHashLink } from "react-router-hash-link";

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

const Links = ["Home", "About Us", "NGO", "Get Wow", "Be Wow"];

export default function TopNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("white", "white")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            bg={"white"}
          />
          {/* <HStack spacing={80} alignItems={"center"}> */}
          <Box>
            <Link to={"/home"}>
              <img
                src={logo}
                className="img-fluid navbar-brand"
                width={80}
                alt="gowow logo"
              />
            </Link>
          </Box>
          <HStack as={"nav"} display={{ base: "none", md: "flex" }}>
            <InputGroup w={"30vw"}>
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="gray.400" />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="Search"
                focusBorderColor="color.1"
                bg={"#F7F6FD"}
              />
            </InputGroup>
          </HStack>
          {/* </HStack> */}
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Box
                  mx={5}
                  w={"30px"}
                  h={"30px"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  borderRadius={"full"}
                  boxShadow={"1.5px 1.5px 5px grey"}
                  cursor={"pointer"}
                >
                  <VscBellDot size={20} />
                </Box>
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
            <Button
              bg={"color.1"}
              borderColor={"color.1"}
              color={"white"}
              _hover={{
                color: "color.1",
                bg: "white",
              }}
              variant={"outline"}
              size={"sm"}
              ml={4}
            >
              Get In Touch
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack my={2}>
              <InputGroup w={"80vw"} mx={"auto"}>
                <InputLeftElement pointerEvents="none">
                  <SearchIcon color="grey.400" />
                </InputLeftElement>
                <Input
                  type="text"
                  placeholder="Search"
                  focusBorderColor="color.1"
                  bg={"#F7F6FD"}
                />
              </InputGroup>
              <Stack as={"nav"} spacing={2} align={"center"}>
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
                      bg: "white",
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
                      bg: "white",
                    }}
                    href={"#gallery"}
                    className={styles.navItems}
                    id={"testimonials"}
                  >
                    Gallery
                  </Box>
                </NavHashLink>
                <NavLink
                  className={styles.linkItem}
                  to={`/myopportunites`}
                >
                  <Box
                    px={2}
                    py={"0.8rem"}
                    rounded={"md"}
                    _hover={{
                      textDecoration: "none",
                      bg: 'white',
                    }}
                    className={styles.navItems}
                    id='myOpportunites'
                  >
                    My Opportunites
                    <Badge variant="solid" bg={'#5B4899'} borderRadius={'full'} ml={2}>
                        34
                      </Badge>
                  </Box>
                </NavLink>
              </Stack>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
