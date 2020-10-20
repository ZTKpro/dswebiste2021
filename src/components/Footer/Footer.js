import React from "react"
import './Footer.scss'

import logo from '../../images/logo.png'

import LinkFooter from './LinkFooter.js'

class Footer extends React.Component{

    render() {
        return(
            <footer className="footer">
                    <div className="g-container footer__container">
                        <div className="footer__box">

                            <div className="footer__leftside footer__side">


                                <div className="footer__personal">

                                    <div className="footer__logobox">

                                        <img className="footer__logo" src={logo} alt="logo"></img>
                                        <h3>DS WEBSITE</h3>

                                    </div>

                                    <a href="/"><p className="footer__emaillink">contact@dswebsite.pl</p></a>
                                    <p>DS WEBSITE</p>
                                    <p>Poland,Białystok 15-378</p>

                                </div>
                                <div className="footer__extralinks">
                                    <h4> Extra Links</h4>
                                    <LinkFooter />

                                </div>




                            </div>

                            <div className="footer__rightside footer__side">
                                    <div className="footer__contact">
                                        <h4>Contact</h4>
                                        <a target="_blank" href="https://m.me/DSwebsite" rel="noopener noreferrer">
                                            <p>m.me/DSwebsite</p>
                                        </a>
                                        <a target="_blank" href="https://www.linkedin.com/company/64502974/" rel="noopener noreferrer">
                                            <p>www.linkedin.com/company/64502974/</p>
                                        </a>
                                        <a href="mailto:contact@dswebsite.pl" rel="noopener noreferrer">
                                            <p>contact@dswebsite.pl</p>
                                        </a>
                                    </div>
                                    <div className="footer__blog">
                                        <h4>Recent Posts</h4>
                                        <div>
                                            <p>How to boosting yours fanpage</p>
                                            <p>How to boosting yours fanpage</p>
                                            <p>How to boosting yours fanpage</p>
                                        </div>
                                    </div>
                            </div> 

                        </div>

                        <div className="footer__right">
                            <p>© DS WEBSITE. All Right Reserved 2020.</p>
                        </div>
                    
                    </div>
            </footer>
        )
    }

}

export default Footer;
