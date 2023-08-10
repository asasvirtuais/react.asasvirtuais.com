import { PropsWithChildren } from 'react'
import { Center, Container, HStack, Heading, Box, Link, BoxProps } from '@chakra-ui/react'
import ColorModeButton from '../../chakra/color-mode-button'
import Icon from '../icon'

export default function Navbar( { children, ...props } : PropsWithChildren<BoxProps> ) {
    return (
        <Box as='nav' {...props}>
            <Container maxW='container.xl'>
                <Center justifyContent='space-between' minH='72px'>
                    <Heading as={Link} href='/'
                        display={{base: 'none', md: 'block'}}>
                            Asas Virtuais</Heading>
                    <Box display={{base: 'block', md: 'none'}}>
                        <Icon/>
                    </Box>
                    <HStack ml='auto' alignItems='center' >
                        {children}
                        <ColorModeButton/>
                    </HStack>
                </Center>
            </Container>
        </Box>
    )
}
