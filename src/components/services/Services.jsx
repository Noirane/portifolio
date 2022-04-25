import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id='services'>
      <h5>O que eu ofereço</h5>
      <h2>Serviços</h2>

      <div className='container services__container'>


        <article className="service">
          <div className="service__head">
            <h3>Como posso te ajudar?</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
                <p>
                  Criação de sites que se comunicam especialmente com o seu público alvo, gerando resultado direto e indireto para o seu negócio. 
                </p>
             
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
                <p>
                  Desenvolvo sites responsivos, ou seja, se adaptam aos diversos tipos de plataformas, formatos e dispositivos.
                </p>
             
            </li> 
            
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Posso te ajudar a criar: sites, landing pages, hot sites, etc.</p>
            </li>

          </ul>
        </article>
      </div>
    </section>
  )
}

export default services
