import React, { ReactNode, useState, useEffect } from 'react'
import {
    Link,
    Flex,
    Box,
    Avatar,
    HStack,
    IconButton,
    useDisclosure,
    useColorModeValue,
    Stack,
    Heading,
    AvatarBadge, Text, 
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon} from '@chakra-ui/icons'
import Button from '../Button'




const Index = ({links}) => {

    const { isOpen, onClose, onOpen } = useDisclosure();
    const NavLink = ({ children }, { children: ReactNode }) => (
        <Link px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', border: 'none', outline: 'none', bg: useColorModeValue('grey.200', 'grey.700') }} to={'/' + children} onClick={onClose}>
            {children}
        </Link>
    )

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'flex-end'}>
                    <IconButton size={'md'} icon={isOpen ? <CloseIcon /> : <HamburgerIcon size='lg' />} aria-label={'open-menu'} display={{ md: 'none' }} onClick={isOpen ? onClose : onOpen} />
                    <HStack>
                        <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                            {links.map((link) => (<Link to={'/' + link}><NavLink key={link} onClick={onClose}>{link}</NavLink></Link>))}
                            <Button text='Signup' bg='orange' color='white' />
                        </HStack>
                    </HStack>
                </Flex>

                {isOpen ? (<Box pb={4} display={{ md: 'none' }}><Stack as={'nav'} spacing={4}>{links.map((link) => (<NavLink key={link}>{link}</NavLink>))}</Stack></Box>) : null}
            </Box>
        </>
    )
}

export default Index