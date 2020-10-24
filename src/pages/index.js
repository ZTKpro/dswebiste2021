import React from "react"
import Helmet from "react-helmet"
import "../components/global.scss"

import Bubbles from "../components/bubbles"
import Nav from "../components/Nav"
import Header from "../components/Header"
import Tech from "../components/Tech"
import Porfolio from "../components/Porfolio"
import WorkTogether from "../components/WorkTogether"

const IndexPage = () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>DS website</title>
      <link
        href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <Bubbles></Bubbles>
    <Nav></Nav>
    <Header></Header>
    <Tech></Tech>
    <Porfolio></Porfolio>
    <WorkTogether></WorkTogether>
  </div>
)

export default IndexPage
