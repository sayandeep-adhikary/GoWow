import React from 'react'
import styles from './Opportunities.module.css'
import { Box, Flex, Text } from '@chakra-ui/react'
import Card from './Card/Card'
import userIcon from '../../../assets/userIcon.png'
import NGOIcon from '../../../assets/donateIcon.png'
import businessIcon from '../../../assets/businessIcon.png'

export default function Opportunities() {
  return (
    <Box pos={'relative'}>
      <Flex justifyContent={'center'} pos={'absolute'} className={styles.cardContainer}>
        <Card icon={userIcon} count={324} text={"Total Users"}/>
        <Card icon={NGOIcon} count={324} text={"NGOs"}/>
        <Card icon={businessIcon} count={324} text={"Businesses"}/>
      </Flex>
      
      <Text pt="40" mb={0}>

      </Text>
    </Box>
  )
}
