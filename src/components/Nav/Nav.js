import React from "react"
import { Link } from "gatsby"
import "./nav.scss"

import logo from "../../images/logo.png"
import NavScroll from "./navScroll/navScroll.js"

const openCollapse = () => {
  const btnCollapse = document.querySelectorAll(".nav__collapseItem")
  const hiddenNav = document.querySelectorAll(".navScroll")

  if (btnCollapse[0].classList === "nav__collapseItem") {
    for (let i = 0; i < btnCollapse.length; i++) {
      btnCollapse[i].classList.add("nav__collapse--active")
    }
    hiddenNav[0].style.display = "flex"
  } else {
    for (let i = 0; i < btnCollapse.length; i++) {
      btnCollapse[i].classList.remove("nav__collapse--active")
    }
    hiddenNav[0].style.display = ""
  }
}

class Nav extends React.Component {
  render() {
    return (
      <nav className="nav">
        <div className="g-container nav__container">
          <Link className="nav__Link" to="/">
            <img className="nav__logo" src={logo}></img>
          </Link>

          <div onClick={openCollapse} className="nav__collapse">
            <div className="nav__collapseItem"></div>
            <div className="nav__collapseItem"></div>
            <div className="nav__collapseItem"></div>
          </div>

          <NavScroll />
        </div>

        <Link to="/pl">
          <p className="g-btn nav__lang">EU</p>
        </Link>
      </nav>
    )
  }
}

export default Nav
