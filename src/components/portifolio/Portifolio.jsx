import React from 'react'
import './portifolio.css'
import IMG1 from '../../assets/site.png'

const Portifolio = () => {
  return (
    <section id='portifolio'>
      <h5> Alguns projetos</h5>
      <h2>Portifólio</h2>


      <div className="container portifolio__container">
        <article className='portfolio__item'>
          <div className='portifolio__item-image'>
            <img src={IMG1} alt=""/>
            </div>
            <h3>This is a portifolio item title</h3>
            <a href="https://github.com" className='btn' target='_blank'>GitHub</a>
        </article>
        <article className='portfolio__item'>
          <div className='portifolio__item-image'>
            <img src={IMG1} alt=""/>
            </div>
            <h3>This is a portifolio item title</h3>
            <a href="https://github.com" className='btn' target='_blank'>GitHub</a>
        </article>
        <article className='portfolio__item'>
          <div className='portifolio__item-image'>
            <img src={IMG1} alt=""/>
            </div>
            <h3>This is a portifolio item title</h3>
            <a href="https://github.com" className='btn' target='_blank'>GitHub</a>
        </article>
        <article className='portfolio__item'>
          <div className='portifolio__item-image'>
            <img src={IMG1} alt=""/>
            </div>
            <h3>This is a portifolio item title</h3>
            <a href="https://github.com" className='btn' target='_blank'>GitHub</a>
        </article>
        <article className='portfolio__item'>
          <div className='portifolio__item-image'>
            <img src={IMG1} alt=""/>
            </div>
            <h3>This is a portifolio item title</h3>
            <a href="https://github.com" className='btn' target='_blank'>GitHub</a>
        </article>
        <article className='portfolio__item'>
          <div className='portifolio__item-image'>
            <img src={IMG1} alt=""/>
            </div>
            <h3>This is a portifolio item title</h3>
            <a href="https://github.com" className='btn' target='_blank'>GitHub</a>
        </article>

        

     
      </div>
    </section>
  )
}

export default Portifolio

/* com boas praticas 

import React from 'react'
import './portifolio.css'
import IMG1 from '../../assets/site.png'


const data= [
  {
  id:1,
  image: IMG1, 
  title: 'Projeto 001',
  github:'https://github.com'
  }, 
  {
  id:2,
  image: IMG1, 
  title: 'Projeto 001',
  github:'https://github.com'
  } ,
  {
  id:3,
  image: IMG1, 
  title: 'Projeto 001',
  github:'https://github.com'
  } 
  
]

const Portifolio = () => {
  return (
    <section id='portifolio'>Portifólio
      <h5> My Recent Work</h5>
      <h2>Portifólio</h2>


      <div className="container portfolio__container">
       {
         data.map(({id, image, title, github}) => {
           return (
            <article key={id} className='portfolio__item'>
            <div className='portifolio__item-image'>
              <img src={image} alt={title}/>
           
              <h3>{title}</h3>
              <a href={github} className='btn' target='_blank'>GitHub</a>
             
              
            </div>
          </article>

         )
         })
       }
        

        

     
      </div>
    </section>
  )
}

export default Portifolio
*/