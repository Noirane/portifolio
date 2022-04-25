import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSociais from './HeaderSociais'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
         <h5>Oi Eu sou</h5>
         <h1>Noirane Sá </h1>
         <h5 className='text-light'>Front-End Developer </h5>
         <CTA/>
         <HeaderSociais/>
         <div className="me">
           <img src={ME} alt="me" />
         </div>
         <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
         

    </header>
  )
}

export default Header
