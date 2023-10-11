import React from "react";
import {
  Button,
  Card,
  CardBody,
  Image,
  Stack,
  Text,
  chakra,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Box,
  Flex,
  Tag,
  TagLeftIcon,
  TagLabel,
  Container,
} from "@chakra-ui/react";
import user from "../../../assets/user.png";
import { SlLocationPin } from "react-icons/sl";
import { FiPhoneCall } from "react-icons/fi";
import { AddIcon } from "@chakra-ui/icons";
import rankBadge from "../../../assets/rankBadge.png";
import point from "../../../assets/point.png";

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
      boxShadow={"0 3px 7px grey"}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function PeopleCard() {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="elevated"
      borderRadius={"xl"}
    >
      <Flex
        bg={"color.1"}
        minW={"30%"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Image
          w={"full"}
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src={user}
          alt="user"
        />
      </Flex>

      <CardBody p={3} px={5} display={"flex"} alignItems={"center"}>
        <Stack spacing={10}>
          <Flex alignItems={"center"} justifyContent={"space-around"} gap={40}>
            <Text color={"#20203B"} mb={0} fontWeight={600}>
              Manish
            </Text>
            <Tag
              size="lg"
              variant="subtle"
              bg={"color.1"}
              color={"white"}
              gap={2}
            >
              <Image src={rankBadge} alt="coin" w={5} />
              <TagLabel>1</TagLabel>
            </Tag>
          </Flex>
          <Flex justifyContent={'center'} alignItems={'center'} >
            <Tag
              size="lg"
              variant="subtle"
              bg={"#F7F6FD"}
              color={"color.1"}
              fontSize={"2rem"}
              fontWeight={600}
              letterSpacing={"1.5px"}
              gap={2}
              mx={'auto'}
              px={5}
              py={2}
              borderRadius={'lg'}
            >
              <Image src={point} alt="coin" w={10} />
              <TagLabel>4250</TagLabel>
            </Tag>
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
}
