import React from "react"
import "./Reviews.scss"
import Slider from "infinite-react-carousel"

import person0 from "./img/person0.png"
import person1 from "./img/person1.jpg"
import person2 from "./img/person2.jpg"
import person3 from "./img/person3.jpg"

const opionionList = [
  {
    Avatar: person0,
    Description:
      "  Damian świadczy usługi na bardzo wysokim poziomie, programowane przez niego strony są porządne, dokładne i według zaleceń klienta. Nasza współpraca (któraś już z kolei) przebiegła pomyślnie, przyjemnie i z zamierzonymi końcowymi rezultatami. Jeśli chcesz się naprawdę wyróżnić w internecie i dać o sobie znać mediom, nie szczędź grosza i skorzystaj z usług tej firmy a gwarantuje ci że będziesz usatysfakcjonowany !",
  },
  {
    Avatar: person1,
    Description:
      " Nasza strona jest w końcu w rękach profesjonalistów! Świetny kontakt, doradztwo no i ludzie naprawdę znają się na rzeczy💪 Polecam!",
  },
  {
    Avatar: person2,
    Description: "Solidny Web Design. Polecam!",
  },
  {
    Avatar: person3,
    Description: "Szczerze polecam! Najwyższy poziom obsługi!",
  },
]
const settings = {
  arrows: false,
  autoplay: true,
  dots: true,
  speed: 100,
}
class Reviews extends React.Component {
  render() {
    return (
      <section className="reviews fadeIn">
        <div className="review__sliderWrapper">
          <Slider {...settings}>
            {opionionList.map(item => (
              <div className="reviews__wrapper">
                <img className="reviews__avatar" src={item.Avatar}></img>
                <p className="reviews__description">{item.Description}</p>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    )
  }
}

export default Reviews
