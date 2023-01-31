import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export default function Header() {
  return (
    <Box 
    bg={"#6B46C1"} 
    pt={"89px"} 
    pb={"200px"} 
    color={"white"} 
    textAlign={{base:"left", md:"left", lg:"center" }}
    pl="25px">
        <Heading fontWeight={"800"} fontSize={"48px"} pb={"10px"}>
        Simple pricing for your business
        </Heading>
        <Text fontWeight={"500"} fontSize={"24px"}>
        Plans that are carefully crafted to suit your business.           
        </Text>
    </Box>
  )
}
