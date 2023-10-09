import {
  Box,
  chakra,
  Container,
  Image,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import styles from "./Footer.module.css";
import logo from "../../assets/logoLg.png";
import { Link } from "react-router-dom";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={"white"}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("#5B4899", "#5B4899")}
      color={useColorModeValue("white", "white")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <a href="#topnav">
          <Image src={logo} alt="gowow logo" my={5} />
        </a>
        <Stack direction={"row"} spacing={6}>
          <Link to={"/home"} className={styles.linkItem}>
            <Box _hover={{ color: "inherit", textDecor: "none" }}>
              Home
            </Box>
          </Link>
          <Link to={"/ngo"} className={styles.linkItem}>
            <Box _hover={{ color: "inherit", textDecor: "none" }}>
              NGO
            </Box>
          </Link>
          <Link to={"/getwow"} className={styles.linkItem}>
            <Box _hover={{ color: "inherit", textDecor: "none" }}>
              Get Wow
            </Box>
          </Link>
          <Link to={"/bewow"} className={styles.linkItem}>
            <Box _hover={{ color: "inherit", textDecor: "none" }}>
              Be Wow
            </Box>
          </Link>
        </Stack>
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          //   direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={"center"}
          align={"center"}
        >
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"YouTube"} href={"#"}>
              <FaYoutube color="#5B4899" />
            </SocialButton>
            <SocialButton label={"FaceBook"} href={"#"}>
              <FaFacebookF color="#5B4899" />
            </SocialButton>
            <SocialButton label={"LinkedIn"} href={"#"}>
              <FaLinkedinIn color="#5B4899" />
            </SocialButton>
            <SocialButton label={"Twitter"} href={"#"}>
              <FaTwitter color="#5B4899" />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaInstagram color="#5B4899" />
            </SocialButton>
          </Stack>
        </Container>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
        py={5}
        textAlign={"center"}
      >
        <Text mb={0}>© Copyright Satyam Studio</Text>
      </Box>
    </Box>
  );
}
