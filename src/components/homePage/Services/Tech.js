import React from "react"
import "./Tech.scss"

import ReactIcon from "./img/ReactIcon.svg"
import NativeIcon from "./img/nativeIcon.svg"
import GatsbyIcon from "./img/gatsbyIcon.svg"
import GraphQlIcon from "./img/graphqlcon.svg"
import TsIcon from "./img/tsIcon.svg"
import NodeIcon from "./img/nodeIcon.svg"

class Tech extends React.Component {
  render() {
    return (
      <div id="Services" className="services fadeIn">
        <div className="g-container services__container">
          <h2>Technologie</h2>
          <div className="services__grid">
            <div className="services__griditem">
              <img src={ReactIcon} alt="computer icon"></img>
              <h4>React</h4>
              <p>React jest najpopularniejszym frameworkiem</p>
            </div>
            <div className="services__griditem">
              <img src={NativeIcon} alt="computer icon"></img>
              <h4>React Native</h4>
              <p>
                React Native to framework który umożliwia tworzenie aplikacji
                mobilnych.
              </p>
            </div>
            <div className="services__griditem">
              <img src={GatsbyIcon} alt="computer icon"></img>
              <h4>Gatsby</h4>
              <p>
                Gatsby to framework pozwalający na budowanie błyskawicznie
                działających aplikacji.
              </p>
            </div>
            <div className="services__griditem">
              <img src={GraphQlIcon} alt="computer icon"></img>
              <h4>GraphQl</h4>
              <p>
                GraphQL to język zapytań, który udostępnia wspólny interfejs
                pomiędzy klientem, a serwerem.
              </p>
            </div>
            <div className="services__griditem">
              <img src={TsIcon} alt="computer icon"></img>
              <h4>TypeScript</h4>
              <p>
                TypeScript jest rozszerzonym JavaScriptem, transpilowanym do
                JavaScript.
              </p>
            </div>
            <div className="services__griditem">
              <img src={NodeIcon} alt="computer icon"></img>
              <h4>Node</h4>
              <p>
                Node.Js jest platformą umożliwiającą uruchomienie kodu
                JavaScript.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Tech
