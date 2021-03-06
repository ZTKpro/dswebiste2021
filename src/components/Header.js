import React from "react"
import styled from "styled-components"

const WrapperHeader = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 20%;
  h2 {
    font-size: 40px;
    text-align: left;
    max-width: 660px;
    @media (max-width: 1200px) {
      font-size: 23px;
    }
  }
  span {
    background: -webkit-linear-gradient(#4ef9fe, #0696ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

class Header extends React.Component {
  render() {
    return (
      <WrapperHeader>
        <h2>
          Hi, my name is <span>Damian Szmurło</span> I Front end developer
        </h2>
      </WrapperHeader>
    )
  }
}

export default Header
