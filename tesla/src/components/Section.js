import React from 'react'
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

function section({ title, description, leftBtnText, rightBtnText, backgroundImg }) {
    return (
        <Wrap bgImage={backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {leftBtnText}
                        </LeftButton>
                        {rightBtnText && // if the right button is doesn't exist then don't show here
                            <RightButton>
                                {rightBtnText}
                            </RightButton>
                        }
                    </ButtonGroup>
                </Fade>
                <DownArrow src="/images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    )
}

export default section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    align-items: center; 
    background-image: ${props => `url("/images/${props.bgImage}")`}
`

const ItemText = styled.div`
  padding: 14vh;
  text-align: center;
  font-size: x-large;
  p{
    font-size: large;
  }
  @media (max-width: 768px) {
        font-size: small;
        
    }

`
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
      flex-direction: column;
    }

`
const LeftButton = styled.button`
    background-color: rgba(23, 26, 30, 0.8);
    height: 45px;
    width: 296px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    opacity: 0.85;
    text-transform: capitalize;
    font-size: 20px;
    cursor: pointer;
    margin: 8px;

`
const RightButton = styled(LeftButton)`
background-color: white;
opacity: 0.65;
font-size: 20px;
color: black;
`
const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
   overflow-x: hidden;
  animation: animationDown infinite 1.5s;
`
const Buttons = styled.div`
  
`