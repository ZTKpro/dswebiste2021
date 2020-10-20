import React from "react"
import "./Baner.scss"

import AexolLogo from "./img/aexol.svg"
import EdumatLogo from "./img/edumat.svg"
import CryptoLogo from "./img/cryptoBuffet.svg"

class Baner extends React.Component {
  render() {
    return (
      <section className="baner fadeIn">
        <img src={EdumatLogo} alt="edumat logo"></img>
        <img src={AexolLogo} alt="aexol logo"></img>
        <img src={CryptoLogo} alt="crypto buffet logo"></img>
      </section>
    )
  }
}

export default Baner
