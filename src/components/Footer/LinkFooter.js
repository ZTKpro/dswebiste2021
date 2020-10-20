import React from "react"
import { Link, animateScroll as scroll } from "react-scroll";

function linkfooter(){
    return(
        <div >
            
            <Link to="Services"
                spy={true}
                smooth={true}
            ><p className="g-btn">Services</p></Link>
            <Link to="Portfolio"
                spy={true}
                smooth={true}><p className="g-btn">Portfolio</p></Link>
            <Link to="Contact"
                spy={true}
                smooth={true}><p className="g-btn">Contact</p></Link>
        </div>
    )
}

export default linkfooter;