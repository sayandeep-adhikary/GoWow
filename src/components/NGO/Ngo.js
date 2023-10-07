import React from 'react'
import TopNav from '../TopNav/TopNav'
import BottomNav from '../BottomNav/BottomNav'
import { Box } from '@chakra-ui/react'
import NgoCard from './NgoCard/NgoCard'
import Footer from '../Footer/Footer'

export default function Ngo() {
  return (
    <>
      <TopNav/>
      <BottomNav/>
      <Box px={20} py={5} bg={'#F7F6FD'}>
        <div className="row my-5">
            <div className="col-sm-12 col-lg-6">
                <NgoCard/>
            </div>
            <div className="col-sm-12 col-lg-6">
                <NgoCard/>
            </div>
        </div>
        <div className="row my-5">
            <div className="col-sm-12 col-lg-6">
                <NgoCard/>
            </div>
            <div className="col-sm-12 col-lg-6">
                <NgoCard/>
            </div>
        </div>
        <div className="row my-5">
            <div className="col-sm-12 col-lg-6">
                <NgoCard/>
            </div>
            <div className="col-sm-12 col-lg-6">
                <NgoCard/>
            </div>
        </div>
        <div className="row my-5">
            <div className="col-sm-12 col-lg-6">
                <NgoCard/>
            </div>
            <div className="col-sm-12 col-lg-6">
                <NgoCard/>
            </div>
        </div>
        <div className="row my-5">
            <div className="col-sm-12 col-lg-6">
                <NgoCard/>
            </div>
            <div className="col-sm-12 col-lg-6">
                <NgoCard/>
            </div>
        </div>
      </Box>
      <Footer/>
    </>
  )
}
