import React from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade';

function Section({title, description, leftbuttxt, rightbuttxt, backgroundImg}) {
    return (
        <Wrap>
            <Fade bottom>
                <Itemtext>
                    <h1> {title}</h1>
                    <p>{description}</p>
                </Itemtext>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {leftbuttxt}
                        </LeftButton>
                        {rightbuttxt && 
                            <RightButton>
                                {rightbuttxt}
                            </RightButton>
                        }
                        

                    </ButtonGroup>
                </Fade>
                <DownArrow src="images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    )
}

export default Section

 
const Wrap = styled.div`
    
    width: 100vw;
    height: 100vh;
    backround-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/logo.svg');
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`


const Itemtext = styled.div`
    z-index: 10;    
    padding-top: 10vh;
    text-align: center;
`


const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }

`

const LeftButton = styled.div`
    background-color: rgb(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 20px;
    cursor: pointer;
    margin: 8px;
`

const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color: black;
`

const DownArrow = styled.img`
    
    height:40px;
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;


`

const Buttons = styled.div`

`