import React from 'react'
import BannarSection from '../../components/Pages/Home/BannarSection/BannarSection'
import "./styles/Home.css"
import Footer from '../../components/Footer/Footer'
import SectionContainer from '../../components/Pages/SectionContainer/SectionContainer'
import { Box, Heading, Image, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
let trustedLogos = [
  { logo: 'https://github.githubassets.com/images/modules/site/home-campaign/logos/stripe.svg', }, { logo: 'https://github.githubassets.com/images/modules/site/home-campaign/logos/pinterest.svg' }, { logo: 'https://github.githubassets.com/images/modules/site/home-campaign/logos/kpmg.svg' }, { logo: 'https://github.githubassets.com/images/modules/site/home-campaign/logos/mercedes.svg' }, { logo: 'https://github.githubassets.com/images/modules/site/home-campaign/logos/pg.svg' }, { logo: 'https://github.githubassets.com/images/modules/site/home-campaign/logos/telus.svg' }
]
const Home = () => {
  return (
    <div className='home-page-dark'>
      <BannarSection />
      <SectionContainer>
        <div className='trustSection'>
          <Text>Trusted by the world’s leading organizations ↘︎</Text>
          <div className='trustedLogos'>
            {
              trustedLogos.map(logo => {
                return <Image src={logo.logo} />
              })
            }
          </div>

          <Box marginTop={"64px"} data-aos='fade-right'>
            <Heading fontSize={'2xl'} marginBottom={'34px'} >Productivity</Heading>
            <Text fontSize={'4xl'} className='info-text'>
              <span className='info-text-colored'>
                Productivity
                Accelerate high-quality software development.</span>
              Our AI-powered platform drives innovation with tools that boost developer velocity.
            </Text>
          </Box>
          <Box className='code-space-section'>
            <Box data-aos='fade-right' className='code-space-section-text' display={'inline-block'}>
              <Text fontSize={'4xl'} className='info-text'>GitHub Codespaces offers a complete dev environment in seconds, so you can code, build, test, and open pull requests from any repo anywhere.
              </Text>
              <Link>
                Check out GitHub Codespaces
              </Link>
            </Box>
            <Box className='code-space-section-images'>
              <Image data-aos='fade-left' className='img1' src='https://github.githubassets.com/images/modules/site/codespaces/illo-ports.png' />
              <Image data-aos='fade-left' className='img2' src='https://github.githubassets.com/images/modules/site/codespaces/illo-context-menu.png' />
            </Box>
          </Box>

        </div>
      </SectionContainer>
      <Footer />
    </div>
  )
}

export default Home