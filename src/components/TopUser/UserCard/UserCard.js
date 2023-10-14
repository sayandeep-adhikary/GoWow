import React from "react";
import styles from './UserCard.module.css'
import userImg from '../../../assets/user.png'
import coin from '../../../assets/point.png'
import { Box, Flex, Image, Text } from "@chakra-ui/react";

export default function UserCard() {
  return (
    <Box className="card text-center my-5" style={{width: '18rem'}} borderRadius={'2xl'} boxShadow={'0 0 2px grey'}>
      <Image className="img-fluid" src={userImg} alt="Card image cap" bg={'color.1'} borderRadius={'12px 12px 0 0'}/>
      <div className="card-body">
        <h5 className="card-title">Manish</h5>
        <Flex align={'center'} justifyContent={'center'} gap={5}>
            <Image src={coin} alt="coin"/>
            <Text fontSize={'2rem'} fontWeight={800} mb={0} color={'color.1'}>4250</Text>
        </Flex>
      </div>
    </Box>
  );
}
