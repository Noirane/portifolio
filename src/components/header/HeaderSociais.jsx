import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import './header.css'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://linkedin.com/noirane-sa" target= "_blank" ><BsLinkedin/></a>
      <a href="https://github.com/noirane" target= "_blank "> <FaGithub/></a>


    </div>

   
  )
}

export default HeaderSocials