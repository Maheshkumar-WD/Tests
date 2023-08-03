import React from 'react'
import "./BannarSection.css"
import Navbar from '../../../Navbar/Navbar'
import DroneImage from '../DroneImage'
import { Link } from 'react-router-dom'
import SectionContainer from '../../SectionContainer/SectionContainer'
import { GoCopilot } from 'react-icons/go'
import { Container, Heading, Text } from '@chakra-ui/react'
const BannarSection = () => {
    return (
        <div className='background-image'>
            <Navbar navTheme={"dark"} />
            <DroneImage />
            <SectionContainer>
                <Container maxW={"container.lg"}>
                    <Link className='bnr-button'>
                        <div>
                            <GoCopilot className='logo' />
                        </div>
                        <div>
                            <Heading className='bnr-btn-heading' >
                                Introducing GitHub Copilot X
                            </Heading>
                            <Text className='bnr-btn-text'>
                                Your AI pair programmer is leveling up
                            </Text>
                        </div>

                    </Link>
                    <Heading fontSize={'8xl'}>Let’s build from here</Heading>
                    <Text fontSize={"4xl"}>The AI-Powered Developer Platform to Build, Scale, and Deliver Secure Software</Text>
                    <div className='calltoactions'>
                        <div className="input-wrapper">
                            <input placeholder='Email Address' type="text" className="inputEle" />
                            <button className='calltoaction-button'>Sign up for GitHub</button>
                        </div>
                        {/* <div> */}
                        <button className='calltoaction-freebutton'>Start a free enterprise trial</button>
                        {/* </div> */}
                    </div>
                </Container>
            </SectionContainer>
        </div>
    )
}

export default BannarSection