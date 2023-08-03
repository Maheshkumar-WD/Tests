import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Card, Flex, Heading, Text } from "@chakra-ui/react"
import { GoTag } from "react-icons/go"
import { Link } from "react-router-dom"
import "./PricingCard.css"

let PricingCard = ({ plan }) => {
    return <Card data-aos="zoom-in-up" data-aos-offset="300" className='plan-card'  padding={" 34px 18px"}>
        {plan.isMostPopular && <span className='badge'><GoTag /> {plan.badgeText.toUpperCase()}</span>}
        <Heading textAlign={'center'} size={"lg"}>{plan.planType}</Heading>
        <Text className='desc' textAlign={'center'}>{plan.desc}</Text>
        <Box margin={"24px 0"} textAlign={'center'}>
            <Flex justifyContent={'center'} gap={"12px"}>
                {plan.strickPrice &&
                    <Flex className='strickPrice'>
                        <span>$</span>
                        <Heading>{plan.strickPrice}</Heading>
                    </Flex>
                }
                <Flex>
                    <span>$</span>
                    <Heading>{plan.price}</Heading>

                </Flex>
            </Flex>
            <Text className='desc'>{plan.priceDescText && plan.priceDescText}</Text>
            <Flex margin={"8px 0"} className='buttons-container' gap={'4px'} justifyContent={'center'}>
                {plan.buttons.map(button => {
                    return <Link className={`button ${button.varient}`} to={button.link}>{button.title}</Link>
                })}
            </Flex>
        </Box>
        <Box className='accordians-container' >
            <Box margin={"12px 0"}>
                {plan.accordians.groups.map(group => {
                    return <>
                        <Heading margin={"16px 0"} className='group-title'>{group?.title?.toUpperCase()}</Heading>
                        <Accordion allowToggle >
                            {
                                group.accordian.map(accordian => {
                                    return <AccordionItem className='accordian-item'>
                                        <AccordionButton>
                                            <Box as="span" flex={1} textAlign='left'>
                                                <Heading size={"sm"}>{accordian.title}</Heading>
                                                <Text className='accordian-subtitle'>{accordian.freePublicRepo && group.freePublicRepo}</Text>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel>
                                            {accordian.description}
                                        </AccordionPanel>
                                    </AccordionItem>
                                })
                            }
                        </Accordion>

                    </>
                })}
            </Box>
        </Box>


    </Card>
}
export default PricingCard