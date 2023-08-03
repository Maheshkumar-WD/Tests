import { Box, Button, Heading, SimpleGrid } from '@chakra-ui/react'
import React, { useState } from 'react'
import "./PricingSection.css"
import { GoTag } from 'react-icons/go'
import pricingData from "./PricingCard/pricingData"
import SectionContainer from '../../SectionContainer/SectionContainer'
import PricingCard from './PricingCard/PricingCard'
const PricingSection = () => {
    let [yearlyPlan, setYearlyPlan] = useState(false);
    let setSelectPlan = (flag) => {
        setYearlyPlan(flag)
    }
    let plans = yearlyPlan ? pricingData.yearly : pricingData.monthly;
    return (
        <section >
            <SectionContainer>
                <Heading size={"3xl"} letterSpacing={"-2px"} textAlign={"center"} >Get the complete developer platform.</Heading>
                <Heading textAlign={'center'} marginTop={"14px"} size={"lg"}>How often do you want to pay?</Heading>
                <Box className='plan-selection-container'>
                    <Box className='plan-btns'>
                        <Button onClick={() => { setSelectPlan(false) }} className={`plan-btn monthly-btn ${!yearlyPlan ? 'selectedPlan' : ""}`}>Monthly</Button>
                        <Button onClick={() => { setSelectPlan(true) }} className={`plan-btn yearly-btn ${yearlyPlan ? 'selectedPlan' : ""}`}>Yearly <span className='plan-offTxt'><GoTag /> Get 1 Month Free </span></Button>
                    </Box>
                </Box>
                <SimpleGrid columns={[1, 1, 3]} gap={'12px'} className='plan-cards'>
                    {plans.map(plan => {
                        return <PricingCard plan={plan} />
                    })}
                </SimpleGrid>
            </SectionContainer>
        </section>
    )
}

export default PricingSection