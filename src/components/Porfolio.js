import React from "react"
import styled from "styled-components"

import Edumat from "./assets/edumat.png"
import Crypto from "./assets/cryptobuffet.png"
import Covid from "./assets/Covid.png"

const WrapperPorfolio = styled.section`
  margin-top: 100px;
  h2 {
    font-size: 55px;
    text-align: center;
    background: -webkit-linear-gradient(#4ef9fe, #0696ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`
const BoxPorfolio = styled.div`
  margin: 100px auto 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 90%;
`

const Image = styled.img`
  height: 100%;
  width: 450px;
  z-index: 2;
  @media (max-width: 800px) {
    width: 400px;
  }
`

const TextBox = styled.div`
  margin-left: 30px;
  p {
    color: #ffffff80;
    font-size: 22px;
  }
`
const Tittle = styled.h3`
  text-align: left;
  margin: 0;
  padding: 0;
  font-size: 45px;
  background: -webkit-linear-gradient(#4ef9fe, #0696ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
const Line = styled.div`
  margin: 5px 0;
  height: 3px;
  width: 80px;
  background-color: #ffffff80;

  div {
    height: 100%;
    width: 0%;
    background-color: #1aaffc;
  }
`

const PortfolioItemsWrapper = styled.div`
  position: relative;
  margin: 40px 50px;
  p {
    text-align: left;
  }

  &.right {
    margin-top: 150px;
  }
  &:hover ${Line} {
    div {
      width: 100%;
    }
  }
  &:hover ${TextBox} {
    p {
      width: 100%;
      color: #1aaffc;
    }
  }
  &:hover ${Image} {
    margin: 15px 15px 0;
  }
`

const PortfolioItems = [
  {
    Img: Edumat,
    Tittle: "Edumat",
    Tech: "React",
    Date: "2020",
    Href: "https://edumat-dev.netlify.app/#/",
  },
  {
    Img: Crypto,
    Tittle: "Crypto Buffet",
    Tech: "React",
    Date: "2020",
    Href: "cryptobuffett.netlify.com",
  },
  {
    Img: Covid,
    Tittle: "Covid",
    Tech: "React Native",
    Date: "2020",
    Href: "https://github.com/ZTKpro/covid-react-native.netlify.app",
  },
  {
    Img: Crypto,
    Tittle: "Dokod",
    Tech: "React",
    Date: "2020",
    Href: "https://github.com/ZTKpro/DOKOD",
  },
]

class Portfolio extends React.Component {
  render() {
    return (
      <WrapperPorfolio>
        <h2>Portfolio</h2>
        <BoxPorfolio>
          {PortfolioItems.map((item, i) => (
            <a href={item.Href} target="_blank">
              <PortfolioItemsWrapper
                key={i}
                className={i % 2 == 0 ? "" : "right"}
              >
                <Image src={item.Img}></Image>
                <TextBox>
                  <Tittle>{item.Tittle}</Tittle>
                  <Line>
                    <div></div>
                  </Line>
                  <p>
                    {item.Tech} {item.Date}
                  </p>
                </TextBox>
              </PortfolioItemsWrapper>
            </a>
          ))}
        </BoxPorfolio>
      </WrapperPorfolio>
    )
  }
}

export default Portfolio
