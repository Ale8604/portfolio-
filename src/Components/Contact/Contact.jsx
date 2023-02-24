import React, { useRef}from "react";
import './contact.css'
import emailjs from '@emailjs/browser';
import contact from '../img/avion.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

export function Contact (){
    AOS.init();
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_w9qr3pi', 'template_3ipf2xc', form.current, 'ovZgxR419g7SZpNuJ')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    return(
        <section id="Contact">
            <div className="cont-all-context-contact">
                <div className="titles_contact">
                    <h2>¿Quieres colaborar conmigo?</h2>
                    <p>
                       En este apartado podras ponerte en contacto conmigo, puede ser para
                       una colaboracion de un proyecto que quieras realizar conmigo, 
                       para contactarte conmigo o si solo quieres enviarme un saludo 💌.
                    </p>
                </div>
                <div className="cont_form_img" >
                    <div className="cont_img_context" >
                        <div className="ctn-img">
                            <img src={contact} alt="img de avion de papel" />
                        </div>
                        <div className="form" >
                            <form ref={form} className="form_email" onSubmit={sendEmail}>
                                <label>Nombre</label>
                                <br /><input type="text"  name="user_name" /><br />

                                <label>Correo</label><br />
                                <input  type="email" name="user_email" /><br />

                                <label>Mensaje</label><br />
                                <textarea name="user_message" className="msj" cols="30" rows="10"></textarea><br />
                                <button ><span>Enviar Mensaje</span></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}