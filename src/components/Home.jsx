import React from 'react'
import styled from "styled-components"
import Section from './section'
function Home() {
  return (
    <Container>
      <Section
        title=" Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title=" Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title=" Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title=" Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title=" Lowest Cost Solar Panels in America "
        description="Money-bank guarantee"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order now"
        rightBtnText=" Learn more"
      />
      <Section
        title=" Solar for New Roofs  "
        description=" Solar Roof Costs Less than a New Plus Solar Panels"
        backgroundImg="solar-roof.jpg"
        leftBtnText="Order now"
        rightBtnText=" Learn more"
      />
      <Section
        title="Accessories"
        backgroundImg="accessories.jpg"
        leftBtnText="Shop now"
      />
    </Container>
  )
}

export default Home
const Container = styled.div`
        width:100vw;
        z-index:10;

`