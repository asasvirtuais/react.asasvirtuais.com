import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export default function ColorModeButton() {
    const { toggleColorMode } = useColorMode()
    return (
        <IconButton onClick={toggleColorMode} size='lg' aria-label='color mode' icon={useColorModeValue(
            <SunIcon/>,
            <MoonIcon/>
        )} />
    )
}
