import React from 'react'
import {Box, Flex, Heading, Stack, Image} from '@chakra-ui/react'
import ellipse from '../../../assets/ellipse.svg'
import pattern from '../../../assets/patterns.svg'
import image1 from '../../../assets/image1.svg'
import image2 from '../../../assets/image2.svg'
import image3 from '../../../assets/image3.png'
import image4 from '../../../assets/image4.svg'

const Hero = () => {
  return (
    <Box>
        <Flex justifyContent='space-between' flexWrap='wrap'>
            <Pattern />
            <HeroImage />
        </Flex>
    </Box>
  )
}

export default Hero

export const Pattern = () => {
    return (
        <Box maxW='560px' position='relative'>
            <Box>
                <Image src={pattern} style={{objectFit: 'cover', width: '100%', height: '100%'}}  />
            </Box>
            <Box position='absolute' top='0'>
                <Image src={ellipse} style={{ objectFit: 'cover', width: '100%', height: '500px', borderRadius: 24 }} />
            </Box>
            <Box color='white' position='absolute' zIndex='1' top="25%" left='10%'>
                <Heading fontSize={50} lineHeight='80px'>We strive to create a space that fosters collaboration</Heading>
            </Box>
        </Box>
    )
}

export const HeroImage = () => {
    return (
        <Stack direction='column' alignItems='center' py='5' px='10' maxW='500px'>
            <Box>
                <Stack direction='row' spacing={3} alignItems='center'>
                    <Image src={image1} style={{width: '210px', height: '240px'}} />
                    <Image src={image2} style={{ width: '210px', height: '200px' }} />
                </Stack>
            </Box>
            <Box>
                <Stack direction='row' spacing={3} alignItems='center'>
                    <Image src={image3} style={{ width: '210px', height: '200px' }} />
                    <Image src={image4} style={{ width: '210px', height: '240px' }} />
                </Stack>
            </Box>
        </Stack>
    )
}