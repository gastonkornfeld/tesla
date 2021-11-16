import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section 
                title="Model-S"
                description = "Order online for Touchless delivery"
                backgroundImg ="/images/model-s.jpg"
                leftbuttxt = "Custom order"
                rightbuttxt = "Exisiting Inventory"
            />
            <Section 
                title="Model-Y"
                description = "Order online for Touchless delivery"
                backgroundImg ="model-y.jpg"
                leftbuttxt = "Custom order"
                rightbuttxt = "Exisiting Inventory"
            />
            <Section 
                title="Model-X"
                description = "Order online for Touchless delivery"
                backgroundImg ="model-x.jpg"
                leftbuttxt = "Custom order"
                rightbuttxt = "Exisiting Inventory"
            />
            <Section 
                title="Model-3"
                description = "Order online for Touchless delivery"
                backgroundImg ="model-3.jpg"
                leftbuttxt = "Custom order"
                rightbuttxt = "Exisiting Inventory"
            />
            <Section 
                title="Lower cost solar panel in america"
                description = "Money Back guarantee"
                backgroundImg ="solar-panel.jpg"
                leftbuttxt = "Order Now"
                rightbuttxt = "Learn More"
            />
            <Section 
                title="Solar for new roofs"
                description = "Solar roof cost less than a  new roof plus solar panels"
                backgroundImg ="solar-roof.jpg"
                leftbuttxt = "Order Now"
                rightbuttxt = "Learn More"
            />
            <Section 
                title="Accesories"
                description = ""
                backgroundImg ="accessories.jpg"
                leftbuttxt = "Shop Now"
                
            />
        </Container>
    )
}



export default Home

const Container = styled.div`
    height: 100vh;
`