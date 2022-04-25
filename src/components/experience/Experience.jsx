import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'


const experience = () => {
  return (
    <section id='experience'>
      <h5>As habilidades que eu tenho</h5>
      <h2>Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
            <h3>Habilidades Técnicas - Hard Skills </h3>
            <div className="experience__content">
            
             <article className='experience__details'>
                <BsPatchCheckFill/>
                <div className='experience__topic'>
                  <h4>HTML</h4>
               
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill/>
                <div className='experience__topic'>
                  <h4>CSS</h4>
                 
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill/>
                <div className='experience__topic'>
                  <h4>JavaScript</h4>
                 
                </div>
              </article>

             
              <article className='experience__details'>
                <BsPatchCheckFill/>
                <div className='experience__topic'>
                  <h4>React</h4>
              
                </div>
              </article>
              
            </div>
        </div>
        
        <div className="experience__backend">
            <h3>Habilidades Pessoais - Soft Skills</h3>
            <div className="experience__content">
            
             <article className='experience__details'>
                <BsPatchCheckFill/>
                <div className='experience__topic'>
                  <h4>Trabalho em equipe</h4>
            
                </div>
              </article>

            

              <article className='experience__details'>
                <BsPatchCheckFill/>
                <div className='experience__topic'>
                  <h4>Gerência de tempo</h4>
                 
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill/>
                <div className='experience__topic'>
                  <h4>Flexível e adaptável</h4>
                  
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill/>
                <div className='experience__topic'>
                  <h4>Compromisso</h4>
               
                </div>
              </article>

   
             

              
              


               
            

                
             
             

              
            </div>
        </div>


      </div>

    </section>
  )
}

export default experience
