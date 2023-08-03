
import React from 'react'
import { Box, Button, Center, Container, Divider, Flex, Input, InputGroup, Menu, MenuButton, MenuGroup, MenuList } from '@chakra-ui/react';
import Logo from '../Logo/Logo'
import "./Navbar.css";
import NavbarLink from './NavbarLink';
import links from "./linksData"
import { GoChevronDown } from 'react-icons/go';
import { Link } from 'react-router-dom';
import SectionContainer from '../Pages/SectionContainer/SectionContainer';
const Navbar = ({ navTheme }) => {

    return (
        <nav className={navTheme}>
            <Container maxW={"1360px"}>
                <Flex justifyContent={"space-between"}>
                    <Flex gap={"6"} alignItems={'center'}>
                        <Logo />
                        <Menu>
                            <MenuButton><Flex alignItems={"center"} gap={"6px"}>Products <GoChevronDown /></Flex> </MenuButton>

                            <MenuList height={"auto"} width={"auto"}>
                                <Flex padding={"6px 12px"} gap={"24px"} justifyContent={"space-between"}>
                                    <Box>
                                        {links.products.menuLinks.map(link => {
                                            return <NavbarLink title={link.title} Logo={link.logo} desc={link.desc} link={link.link} />
                                        })}
                                    </Box>
                                    <Center height='auto'>
                                        <Divider orientation='vertical' />
                                    </Center>
                                    <Box>
                                        <MenuGroup title='Explore' className='linkGroup'>
                                            {links.products.explore.map(link => {
                                                return <NavbarLink title={link.title} Logo={link.logo} desc={link.desc} link={link.link} />
                                            })}
                                        </MenuGroup>
                                    </Box>
                                </Flex>
                            </MenuList>
                        </Menu>
                        <Menu >
                            <MenuButton><Flex alignItems={"center"} gap={"6px"}>Solutions <GoChevronDown /></Flex> </MenuButton>
                            <MenuList>
                                {
                                    links.solutions.groups.map(group => {
                                        return <>

                                            <MenuGroup className='linkGroup' title={group.title}>
                                                {group.links.map(link => {
                                                    return <NavbarLink title={link.title} Logo={link.logo} desc={link.desc} link={link.link} />
                                                })}
                                            </MenuGroup>
                                            <Divider />
                                        </>
                                    })
                                }
                            </MenuList>
                        </Menu>
                        <Menu >
                            <MenuButton><Flex alignItems={"center"} gap={"6px"}>Open Source <GoChevronDown /></Flex> </MenuButton>
                            <MenuList>
                                {
                                    links.openSource.groups.map(group => {
                                        return <>

                                            <MenuGroup className='linkGroup' title={group.title}>
                                                {group.links.map(link => {
                                                    return <NavbarLink title={link.title} Logo={link.logo} desc={link.desc} link={link.link} />
                                                })}
                                            </MenuGroup>
                                            <Divider />
                                        </>
                                    })
                                }
                            </MenuList>
                        </Menu>
                        <Link to="/pricing">Pricing</Link>
                    </Flex>
                    <Flex gap={"2px"} alignItems={'center'}>
                        <InputGroup>
                            <Input size={"md"} placeholder='Search GitHub' />
                        </InputGroup>
                        <Button variant={"ghost"} >Sign In</Button>
                        <Button variant={'outline'} >Sign Up</Button>
                    </Flex>
                </Flex>
            </Container>
        </nav>
    )
}

export default Navbar