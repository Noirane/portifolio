import React from 'react'
import './about.css'
import ME from '../../assets/sobre.png'
import {FaAward} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
        <h5>Um pouco</h5>
        <h2>Sobre mim</h2>

        <div className="container about__container">
            <div className="about__me">
                <div className='about__me-image'>
                    <img src={ME} alt="sobre.png" />
                </div>
            </div>
            
        <div className="about__content">
            <div className="about__cards">
               <article className='about__card'>
                   <FaAward className='about__icon'/>
                   <h5>Bacharel em Ciência da Computação</h5>
                 
               </article> 

               <article className='about__card'>
                   <FaAward className='about__icon'/>
                   <h5>Especialista em Engenheira de Software</h5>
                
               </article> 

               <article className='about__card'>
                   <FaAward className='about__icon'/>
                   <h5>Programadora Front-End</h5>
               </article> 
            </div>
            <p>
          
Sou formado em Ciência da Computação com especialização em
Engenharia de Software. Já atuei dentro e fora da TI , em empresas 
como: Banco do Nordeste, Justiça Federal de Sergipe e Banco do Brasil. 
Atualmente trabalho como programadora Web Front-End.  
               

            </p>

            <a href="#contact" className='btn btn-primary'>Vamos conversar</a>


            </div>
        </div>
    </section>
  )
}

export default About