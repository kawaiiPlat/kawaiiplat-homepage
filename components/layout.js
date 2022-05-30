import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import { Flex, StackDivider, Spacer } from '@chakra-ui/react'

export default function layout({ children }) {
  return (
    <>
      <Flex
        divider={<StackDivider borderColor='gray.200' />}
        direction='column'
      >
        <Navbar />
        <main>{ children }</main>
        <Spacer/>
        <Footer />
      </Flex>
    </>
  )
}
