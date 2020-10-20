import React from "react"

import Header from "./Header/Header.js"
import Services from "./Services/Tech.js"
import Offer from "./Offer/Offer.js"
import Portfolio from "./Portfolio/Portfolio.js"
import Reviews from "./Reviews/Reviews.js"
import Baner from "./Baner/Baner.js"
import Contact from "./Contact/Contact.js"

const fadeIn = () => {
  const fadeInItem = document.querySelectorAll(".fadeIn")

  for (let i = 0; i < fadeInItem.length; i++) {
    if (fadeInItem[i].offsetTop - 1000 <= window.pageYOffset) {
      fadeInItem[i].style.opacity = "1"
    }
  }
}

class homePage extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", fadeIn)
  }
  render() {
    return (
      <div>
        <Header />
        <main>
          <Services />
          <Offer />
          <Portfolio />
          <Reviews />
          <Baner />
          <Contact />
        </main>
      </div>
    )
  }
}

export default homePage
