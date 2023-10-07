import {
  Box,
  Flex,
  Avatar,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Image,
  InputGroup,
  InputLeftElement,
  Input,
  Container,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import logo from "../../assets/logo.png";
import { VscBellDot } from "react-icons/vsc";
import { Link } from "react-router-dom";

export default function TopNav() {
  return (
    <>
      <Box bg={useColorModeValue("white", "white")} px={20} pt={2} id="topnav">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <Link to={"/home"}>
              <Image src={logo} alt="gowow logo" width={89} />
            </Link>
          </HStack>
          <Container maxW={"25rem"}>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="gray.300" />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="Search"
                focusBorderColor="color.1"
                bg={"#F7F6FD"}
              />
            </InputGroup>
          </Container>
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
              variant={"outline"}
              borderColor={"color.1"}
              size={"sm"}
              bg={"color.1"}
              color={"white"}
              _hover={{
                color: "color.1",
                bg: "white",
              }}
              ml={4}
              letterSpacing={"1px"}
              py={5}
            >
              Get in Touch
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
