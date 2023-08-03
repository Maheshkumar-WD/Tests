import { Box, Flex, MenuItem, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import "./NavbarLinks.css"

const NavbarLink = ({ link, title, desc, Logo }) => {
    return (
        <>
            <Link to={link}>
                <MenuItem>
                    <Flex gap={"12px"} alignItems={"center"}>
                        {Logo && <Logo color="gray" size="24px" />}
                        <Box lineHeight={"18px"}>
                            {title && <Text className='linktitle' color={'black'}>{title}</Text>}
                            {desc && <span className='linkDesc'>{desc}</span>}
                        </Box>
                    </Flex>
                </MenuItem>
            </Link>
        </>
    )
}

export default NavbarLink