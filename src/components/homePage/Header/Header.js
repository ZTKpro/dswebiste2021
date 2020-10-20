import React from "react"
import './Header.scss'


const circle0Left = 2;
const circle0Bot = -75;
const circle1Left = 27;
const circle1Bot = 27;
const circle2Left = 70;
const circle2Bot = -40;
const circle3Left = 105;
const circle3Bot = -35;

const cicleFollow = (e) =>{
    document.addEventListener('mousemove',function (e){
    const circle = document.querySelectorAll('.header__circle')

      const mouseX =  e.clientX
      const mouseY =  e.clientY

      circle[0].style.left = -mouseX /250 + circle0Left + "vw"
      circle[0].style.bottom = mouseY  /80  + circle0Bot + "vh"
      circle[1].style.left = -mouseX /200  +  circle1Left + "vw"
      circle[1].style.bottom = mouseY /80 + circle1Bot + "vh"
      circle[2].style.left = -mouseX  /220  +  circle2Left + "vw"
      circle[2].style.bottom = mouseY /80   + circle2Bot + "vh"
      circle[3].style.left =  -mouseX  /260  + circle3Left + "vw"
      circle[3].style.bottom = mouseY /80 + circle3Bot + "vh"
    })
}



class Header extends React.Component{

    componentDidMount(){
        cicleFollow()          
    }

    render() {
        
        return(
            <header className="header">
                <div className="g-container header__container">
                    <div className="header__textbox">
                        <p>Welcome to</p>
                        <h1>DS WEBSITE</h1>
                    </div>
                </div>
                <div className="header__circle header__circle--1"></div>
                <div className="header__circle header__circle--2">
                    <div className="header__circleinside"></div>
                </div>
                <div className="header__circle header__circle--3"></div>
                <div className="header__circle header__circle--4">  
                    <div className="header__circleinside"></div>
                </div>
            </header>
        )
    }

}

export default Header;
