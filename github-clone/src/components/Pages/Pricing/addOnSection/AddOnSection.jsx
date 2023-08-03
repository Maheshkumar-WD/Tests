import React from 'react'
import SectionContainer from '../../SectionContainer/SectionContainer'
import { Card, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import { GoArchive, GoArrowDown, GoArrowRight, GoCodespaces, GoCopilot, GoShieldCheck } from 'react-icons/go'
import "./AddOnSection.css"
import { Link } from 'react-router-dom'
const AddOnSection = () => {
  let addOns = [
    {
      Logo: GoCopilot,
      title: 'GitHub Copilot',
      desc: 'Starting at $10/month after a 30 day trial.',
      linkText: 'Compare plans '
    },
    {
      Logo: GoCodespaces,
      title: 'Codespaces',
      desc: 'Starting at $0.18 per hour of compute and $0.07 per GB of storage.',
      linkText: 'Learn more'
    },
    {
      Logo: GoArchive,
      title: 'Large File Storage',
      desc: 'Starting at $10/month after a 30 day trial.',
      linkText: 'Learn more'
    },
    {
      Logo: GoShieldCheck,
      title: 'GitHub Advanced Security',
      desc: '$49 per month per active committer.',
      linkText: 'Learn more'
    }
  ]
  return (
    <>
      <Heading className='addOnTitle' size="lg" marginBottom={"28px"} textAlign={'center'}>Additional add-ons</Heading>
      <SimpleGrid margin={'12px 0'} columns={[1, 2, 4]} gap={"14px"}>
        {
          addOns.map(addOn => {
            return <Card data-aos='zoom-in' className='addOnCard'>
              <div className='logo-background'>
                <addOn.Logo size={"28px"} className='addOn-logo' />
              </div>
              <Heading size={"md"}>
                {addOn.title}
              </Heading>
              <Text>{addOn.desc}</Text>
              <Link className='addOnCard-link' to={"#"} >{addOn.linkText} <GoArrowRight /></Link>
            </Card>
          })
        }
      </SimpleGrid>
      <div className='compareFeturesHeading-wrapper'>
        <Heading className='compareFeaturesHeading' fontWeight={'600'}>Compare all features</Heading>
        <GoArrowDown />
      </div>
    </>
  )
}

export default AddOnSection