import React from "react"
import "./Offer.scss"

import website from "./img/website.png"
import CMS from "./img/CMS.png"
import rwd from "./img/rwd.png"
import hosting from "./img/hosting.png"
import email from "./img/email.png"
import ssl from "./img/SSL.png"
import wrench from "./img/wrench.png"
import designer from "./img/designer.png"
import customer from "./img/customer.png"
import fb from "./img/fb.png"
import card from "./img/card.png"

class Offer extends React.Component {
  render() {
    return (
      <div className="offer fadeIn">
        <div className="g-container offer__containers">
          <div className="offer__item">
            <h4>Stawka godzinowa</h4>
            <p className="offer__price">65zł/h</p>
            <p className="offer__description">
              Potrzebujesz przyspieszyć budowę aplikacji ale nie chcesz
              zatrudniać programisty na stałe ?
            </p>
            <ul className="offer__ul">
              <li className="offer__li">
                <p>Czysty kod</p>
              </li>
              <li className="offer__li">
                <p>Profesjonalne podejście</p>
              </li>
            </ul>
          </div>

          <div className="offer__item">
            <h4>B2B</h4>
            <p className="offer__price">8500 zł/netto</p>
            <p className="offer__description">
              Brakuje ci rąk w projekcie i poszukujesz kogoś do stałej
              współpracy?
            </p>
            <ul className="offer__ul">
              <li className="offer__li">
                <p>Czysty kod</p>
              </li>
              <li className="offer__li">
                <p>Profesjonalne podejście</p>
              </li>
              <li className="offer__li">
                <p>Pełne zaangażowanie</p>
              </li>
            </ul>
          </div>

          <div className="offer__item">
            <h4>Projekt</h4>
            <p className="offer__price">----</p>
            <p className="offer__description">
              Masz pomysł na aplikacje ale braku ci rąk aby to zrealizować?
            </p>
            <ul className="offer__ul">
              <li className="offer__li">
                <p>Czysty kod</p>
              </li>
              <li className="offer__li">
                <p>Profesjonalne podejście</p>
              </li>
              <li className="offer__li">
                <p>Pełne zaangażowanie</p>
              </li>
              <li className="offer__li">
                <p>Różne formy rozliczenia</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Offer
