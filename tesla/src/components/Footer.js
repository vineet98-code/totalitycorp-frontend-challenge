import React from 'react'
import styled from "styled-components";

const Footer = () => {
  return (
    <div>
        <Ul>
          <a href="/">Tesla &copy; 2020</a>
          <a href="/">Privacy & Legal</a>
          <a href="/">Vehicle Recals</a>
          <a href="/">Contact</a>
          <a href="/">Careers</a>
          <a href="/">News</a>
          <a href="/">Engage</a>
          <a href="/">Locations</a>
        </Ul>
    </div>
  )
}

export default Footer

const Ul = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  
   
    a {
      :hover {background-color: rgba(0,0,0,.07)}
        border-radius: 8px;
        padding: 10px;
        text-decoration: none;
        text-transform: capitalize;
        /* padding: 0 10px; */
        font-size: small;
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 20px;
    }
    @media (max-width: 768px) {
        flex-direction: column;

    }
`