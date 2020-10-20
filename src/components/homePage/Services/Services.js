import React from "react"
import './Services.scss'


import coding from './img/coding.png'
import shop from './img/shop.png'
import design from './img/design.png'
import facebook from './img/facebook.png'
import seo from './img/SEO.png'
import app from './img/app.png'




class Services extends React.Component{

    render() {
        return(
            <div id="Services" className="services fadeIn">
                <div className="g-container services__container">
                    <h2>Our Services</h2>
                    <div className="services__grid">
                        <div className="services__griditem">
                            <img src={coding} alt="computer icon"></img>
                            <h4>Create website</h4>
                            <p>Professional websites created especially for you</p>
                        </div>
                        <div className="services__griditem">
                            <img src={shop} alt="computer icon"></img>
                            <h4>Shop</h4>
                            <p>Creating online stores focused on sales</p>
                        </div>
                        <div className="services__griditem">
                            <img src={design} alt="computer icon"></img>
                            <h4>Web design</h4>
                            <p>Creating a layout page that will delight you with its simple and appearance</p>
                        </div>
                        <div className="services__griditem">
                            <img src={facebook} alt="computer icon"></img>
                            <h4>Social media</h4>
                            <p>We create an engaged community on your fanpage</p>
                        </div>
                        <div className="services__griditem">
                            <img src={seo} alt="computer icon"></img>
                            <h4>SEO</h4>
                            <p>We will raise your site to the first place in Google search</p>
                        </div>
                        <div className="services__griditem">
                            <img src={app} alt="computer icon"></img>
                            <h4>Web application</h4>
                            <p>We create an application that will meet your <br />
                             requirements</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Services;
