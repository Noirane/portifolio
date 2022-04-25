import React from 'react'
import './footer.css'
import {FaFacebook}  from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Noirane Sá</a>

    <ul className='pemalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#experience">Habilidades</a></li>
        <li><a href="#services">Serviços</a></li>
        <li><a href="#portifolio">Portifólio</a></li>
        <li><a href="#contact">Contato</a></li>
    </ul>
     
     <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebook/></a>
        <a href="https://instagram.com"><FiInstagram/></a>
        <a href="https://twitter.com"><IoLogoTwitter/></a>
     </div>

    <div className="footer__copyright"></div>
      <small>
        &copy; Noirane Sá - Todos direitos reservados
      </small>
    </footer>
  )
}

export default footer


