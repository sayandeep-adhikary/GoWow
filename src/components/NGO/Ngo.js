import React from 'react'
import TopNav from '../TopNav/TopNav'
import BottomNav from '../BottomNav/BottomNav'
import { Box } from '@chakra-ui/react'
import NgoCard from './NgoCard/NgoCard'
import Footer from '../Footer/Footer'
import styles from './Ngo.module.css'

export default function Ngo() {
  return (
    <>
      <TopNav/>
      <BottomNav/>
      <Box px={20} py={5} bg={'#F7F6FD'} className={styles.container}>
        <div className="row">
            <div className="col-sm-12 col-lg-6 py-3">
                <NgoCard/>
            </div>
            <div className="col-sm-12 col-lg-6 py-3">
                <NgoCard/>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12 col-lg-6 py-3">
                <NgoCard/>
            </div>
            <div className="col-sm-12 col-lg-6 py-3">
                <NgoCard/>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12 col-lg-6 py-3">
                <NgoCard/>
            </div>
            <div className="col-sm-12 col-lg-6 py-3">
                <NgoCard/>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12 col-lg-6 py-3">
                <NgoCard/>
            </div>
            <div className="col-sm-12 col-lg-6 py-3">
                <NgoCard/>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12 col-lg-6 py-3">
                <NgoCard/>
            </div>
            <div className="col-sm-12 col-lg-6 py-3">
                <NgoCard/>
            </div>
        </div>
      </Box>
      <Footer/>
    </>
  )
}
