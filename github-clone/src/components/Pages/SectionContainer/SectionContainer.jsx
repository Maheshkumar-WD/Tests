import React from 'react'
import { Container } from "@chakra-ui/react"
const SectionContainer = ({ children }) => {
  return (
    <Container maxW={"1360px"} padding={"34px 0"}>{children}</Container>
  )
}

export default SectionContainer