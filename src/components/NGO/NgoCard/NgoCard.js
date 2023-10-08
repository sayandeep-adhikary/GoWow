import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Text,
  chakra,
  useColorModeValue,
  VisuallyHidden,
  HStack,
} from "@chakra-ui/react";
import ngoHand from "../../../assets/NgoHand.png";
import { SlLocationPin } from "react-icons/sl";
import { FiPhoneCall } from "react-icons/fi";

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

export default function NgoCard() {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="elevated"
      py={5}
    >
      <Image
        w={"full"}
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={ngoHand}
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody p={3} pr={5}>
          <Text color={"#20203B"}>
            Shree Ram Nirashrit Mahila EVM Bal Asharam
          </Text>
          <HStack justifyContent={"flex-start"} alignItems={"center"}>
            <SocialButton label={"YouTube"} href={"#"}>
              <SlLocationPin color="#E8711F" />
            </SocialButton>
            <Text fontSize={"0.7rem"} mb={0} ml={3} fontWeight={600}>
              Gomathgiri, Indore, Madhya Pradesh 453112, India
            </Text>
          </HStack>
          <div className="row">
            <div className="col-6">
              <HStack
                justifyContent={"flex-start"}
                alignItems={"center"}
                py="5"
              >
                <SocialButton label={"YouTube"} href={"#"}>
                  <FiPhoneCall color="#E8711F" />
                </SocialButton>
                <Text fontSize={"0.7rem"} mb={0} ml={3} fontWeight={600}>
                  9691961331
                </Text>
              </HStack>
            </div>
            <div className="col-6 d-flex align-items-center justify-content-center">
              <Button variant="solid" color={'white'} bg={'color.1'} _hover={{color: '#5B4899', bg: 'white', border: '1px solid #5b4899'}}>
                View Map
              </Button>
            </div>
          </div>
        </CardBody>
      </Stack>
    </Card>
  );
}
