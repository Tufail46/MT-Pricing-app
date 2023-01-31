import { Box, Flex, HStack, Icon,Text} from '@chakra-ui/react'
import React from 'react'
import Svg1 from './Svg1'
import Svg2 from './Svg2'
import Svg3 from './Svg3'

export default function FooterItem() {
  return (
    <Box 
    mt={"50px"} 
    mx={{base:"25px", lg:"auto"}} 
    maxW={"800px"}>
        <Flex direction={{base:"column", md:"column", lg:"row"}}>
            <Box>
            <HStack mb="20px">
                <Icon as ={Svg1}/>
                <Text fontWeight={"700"} fontSize={"18px"} width="200px">
                    30 days money back Guarantee
                </Text>
            </HStack>
            </Box>
            <Box>
            <HStack mb="20px">
                <Icon as ={Svg2}/>
                <Text fontWeight={"700"} fontSize={"18px"} width="150px">
                No setup fees 100% hassle-free
                </Text>
            </HStack>
            </Box>
            <Box ml="5px">
            <HStack mb="20px">
                <Icon as ={Svg3}/>
                <Text fontWeight={"700"} fontSize={"18px"} width="250px">
                No monthly subscription Pay once and for all
                </Text>
            </HStack>
            </Box>
        </Flex>
    </Box>
  )
}
