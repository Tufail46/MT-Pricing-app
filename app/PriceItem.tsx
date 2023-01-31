import { Box, Button, Flex, Heading, HStack, Text, Icon } from '@chakra-ui/react'
import React from 'react'
import Svg from './Svg'

export default function PriceItem() {
  return (
    <Box maxW={"900px"} 
    mx={{base:"25px", lg:"auto"}} 
    mt={"-127.5px"} 
    bg={"#FFFFFF"} 
    boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
    overflow={"hidden"}
    borderRadius="12px">
        <Flex direction={{base:"column", md:"column", lg:"row"}}>
            <Box textAlign={"center"} p={"57px"} bg="#9791a1">
            <Text fontWeight={"800"} fontSize={"24px"} pb="10px">
                Premium PRO
            </Text>
            <Heading fontWeight={"800"} fontSize={"60px"} pb="10px">
                $329
            </Heading>
            <Text fontWeight={"500"} fontSize={"18px"} pb="10px">
                billed just once
            </Text>
            <Button width = "282px" height = "51px" bg={"#805AD5"} color="white">
                Get Started
            </Button>
            </Box>
            <Box>
            <Text fontWeight={"400"} fontSize={"18px"} pt="48px" pl="48px" pr="48px">
            Access these features when you get this pricing package for your business.
            </Text>
            <HStack pl="48px">
                <Icon as = {Svg}/>
                <Text fontWeight={"400"} fontSize={"18px"} pb="10px" pt="10px">
                International calling and messaging API
                </Text>
            </HStack>
            <HStack pl="48px">
                <Icon as = {Svg}/>
                <Text fontWeight={"400"} fontSize={"18px"} pb="10px">
                Additional phone numbers
                </Text>
            </HStack>
            <HStack pl="48px">
                <Icon as = {Svg}/>
                <Text fontWeight={"400"} fontSize={"18px"} pb="10px">
                Automated messages via Zapier
                </Text>
            </HStack>
            <HStack pl="48px">
                <Icon as = {Svg}/>
                <Text fontWeight={"400"} fontSize={"18px"} pb="10px">
                24/7 support and consulting
                </Text>
            </HStack>
            </Box>
        </Flex>
    </Box>
  )
}
