import React from "react"
import Helmet from "react-helmet"
import '../components/global.scss'


import Nav from '../components/Nav/Nav.js' 
import HomePage from '../components/homePage/homePage.js' 
import Footer from '../components/Footer/Footer.js' 




const IndexPage = () => (
  <div>
    <Helmet>
          <meta charSet="utf-8" />
          <title>DS website</title>
          <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,700&display=swap" rel="stylesheet"/>
    </Helmet>
    <Nav />
    <HomePage />
    <Footer />
  </div>
)

export default IndexPage
