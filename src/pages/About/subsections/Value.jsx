import { Box, Text, Stack, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import icon1 from '../../../assets/icon1.png'
import icon2 from '../../../assets/icon2.png'
import icon3 from '../../../assets/icon3.png'
import icon4 from '../../../assets/icon4.png'


const Value = () => {
  return (
    <Box w='100%'>
        <Stack direction='row' alignItems='center'>
              <Box w='35%'>
                  <Heading fontSize={40} fontWeight='bold' mb='6' color='#1E3747'>Value Statement</Heading>
                  <Text fontSize={{ base: 18, lg: 18 }} fontWeight='normal' color='#6A7C88'>
                      We strive to create a space that fosters collaboration and learning among tech enthusiasts of all levels. Whether you're a beginner or an expert, our community welcomes you.
                  </Text>
              </Box>
            <Box w='45%'> 
                <Stack direction='row' flexWrap='wrap'>
                  <Cards 
                    text='We are passionate about staying up-to-date with the latest trends and technologies in the tech industry, and we encourage our members to explore new ideas and push the boundaries of what is possible.' 
                    hColor='#34A853'
                    hText='Innovation'
                    icon={icon4}
                  />
                  <Cards 
                    text='We believe that building a strong and supportive community is essential to achieving our mission. We are dedicated to creating a community where members can connect with each other and build lasting relationships.' 
                    hColor='#4285F4'
                    hText='Community'
                    icon={icon3}
                  />

                   <Cards 
                        text='We are committed to creating a space where members can learn from each other and from experts in the tech industry' 
                        hColor='#FBBC04'
                        hText='Learning'
                        icon={icon2}
                  />

                    <Cards 
                        text='We believe that everyone, regardless of background or experience, should feel welcome and valued in our community.' 
                        hColor='#DA5847'
                        hText='Inclusivity'
                        icon={icon1}
                  />
                </Stack>
            </Box>
        </Stack>
    </Box>
  )
}

export default Value


export const Cards = ({hText, hColor, text, icon}) => {
    return (
        <Box boxShadow='md' borderRadius={10} p='4' bg='white' w='270px' h='270px' mb='5'>
            <Stack mb='3' direction='row' spacing={3} alignItems='center'>
                <Box w='30px' h='30px'><Image src={icon} w='100%' /></Box>
                <Heading fontSize={16} color={hColor}>{hText}</Heading>
            </Stack>
            <Text color='#6A7C88' fontSize={15} lineHeight={7}>
                {text}
            </Text>
        </Box>
    )
}