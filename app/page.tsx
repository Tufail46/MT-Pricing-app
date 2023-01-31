"use client"
import { Box, ChakraProvider, Flex } from '@chakra-ui/react'
import FooterItem from './FooterItem'
import Header from './Header'
import PriceItem from './PriceItem'

export default function Home() {
  return (
    <ChakraProvider>
    <Header/>
    <PriceItem/>
    <FooterItem/>
    </ChakraProvider>
  )
}
