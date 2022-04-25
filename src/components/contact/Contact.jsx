import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'



function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_w1wena3', 'template_pw01nge', form.current, 'dB1Bi_mPtzAdlCqyg')
    e.target.reset()

  }




  return (
    <section id='contact'>
      <h5> Entar em contato </h5>
      <h2> Contate-me </h2>

      <div className="container contact__container">
        <div className='contact__options'>
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h4>noirane.aju@gmail.com</h4>
            <a href="mailto:noirane.aju@gmail.com" target="_blank">Enviar Mensagem</a>
          </article>

   

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h4>+155 79 9 99208341</h4>
            <a href="https://api.whatsapp.com/send?phone=5579999208341">Enviar Mensagem</a>
          </article>


        </div>
        {/*END OF CONTACT*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Seu primeiro Nome' required />
          <input type='email' name='email' placeholder='Seu Email' required />
          <textarea name="message" rows="7" placeholder='Sua mensagem' required></textarea>
          <button type='submit' className='btn btn-primary'>Enviar mensagem</button>
        </form>
      </div>


    </section>
  )
}

export default Contact