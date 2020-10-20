import React from "react"
import './navScroll.scss'
import { Link, animateScroll as scroll } from "react-scroll";
 
const closeNavScroll = () =>{

    const navScroll = document.querySelector(".navScroll")
    const btnCollapse = document.querySelectorAll(".nav__collapseItem")
    
    navScroll.style.display = "" 

    for(let i = 0;i< btnCollapse.length;i++){
        btnCollapse[i].classList.remove('nav__collapse--active')
    }
}


class navScroll extends React.Component{

    render() {
        return(
            <div className="navScroll">
                <Link to="Services"
                 spy={true}
                 smooth={true}
                ><p onClick={closeNavScroll}> Services</p></Link>
                <Link 
                 spy={true}
                 smooth={true}
                to="Portfolio"><p onClick={closeNavScroll}>Portfolio</p></Link>
                <Link
                 spy={true}
                 smooth={true}
                to="Contact"><p onClick={closeNavScroll}>Contact</p></Link>
            </div>
        )
    }

}

export default navScroll;