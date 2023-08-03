import React from 'react'
import SectionContainer from '../Pages/SectionContainer/SectionContainer'
import { Button, Heading } from '@chakra-ui/react'
import "./Footer.css"
import { Link } from 'react-router-dom'
let footerlinks = [
    {
        title: "Products",
        links: [
            {
                linkText: "Features",
                link: "#"
            },
            {
                linkText: "Security",
                link: "#"
            },
            {
                linkText: "Team",
                link: "#"
            },
            {
                linkText: "Enterprise",
                link: "#"
            },
            {
                linkText: "Customer stories",
                link: "#"
            },
            {
                linkText: "The ReadME Project",
                link: "#"
            },
            {
                linkText: "Pricing",
                link: "#"
            },
            {
                linkText: "Resources",
                link: "#"
            },
            {
                linkText: "Roadmap",
                link: "#"
            },
            {
                linkText: "Compare",
                link: "#"
            },
        ]
    },
    {
        title: 'Platform',
        links: [
            {
                linkText: "Developer API",
                link: "#"
            },
            {
                linkText: "Partners",
                link: "#"
            },
            {
                linkText: "Electron",
                link: "#"
            },
            {
                linkText: "GitHub Desktop",
                link: "#"
            },
        ]
    },
    {
        title: "Support",
        links: [
            {
                linkText: "Docs",
                link: "#"
            },
            {
                linkText: "Comunity Forum",
                link: "#"
            },
            {
                linkText: "Professional Sercices",
                link: "#"
            },
            {
                linkText: "Premium Support",
                link: "#"
            },
            {
                linkText: "Skills",
                link: "#"
            },
            {
                linkText: "Status",
                link: "#"
            },
            {
                linkText: "Contact GitHub",
                link: "#"
            },
        ]
    },
    {
        title: 'Company',
        links: [
            {
                linkText: "About",
                link: "#"
            },
            {
                linkText: "Blog",
                link: "#"
            },
            {
                linkText: "Careers",
                link: "#"
            },
            {
                linkText: "Press",
                link: "#"
            },
            {
                linkText: "Inclusion",
                link: "#"
            },
            {
                linkText: "Social Impact",
                link: "#"
            },
            {
                linkText: "Shop",
                link: "#"
            },
        ]
    }
]
const Footer = () => {
    return (
        <SectionContainer>
            <footer>
                <div className='footer-container'>
                    <div className='footer-left'>
                        <Heading className='logo'>GitHub</Heading>
                        <p className='subscribe-title'>Subscribe to our newsletter</p>
                        <p>Get product updates, company news, and more.</p>
                        <Button className='subscribe-btn' variant={"outline"}>Subscribe</Button>
                    </div>
                    <div className="footer-right">
                        {
                            footerlinks.map(cateLinks => {
                                return <>

                                    <div className="col">
                                        <p>{cateLinks.title}</p>
                                        {
                                            cateLinks.links.map(link => {
                                                return <Link to={link.link}>{link.linkText}</Link>
                                            })
                                        }
                                    </div>
                                </>
                            })
                        }
                    </div>
                </div>
            </footer>
        </SectionContainer>
    )
}

export default Footer