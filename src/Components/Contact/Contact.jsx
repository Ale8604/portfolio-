import React from "react";
import './contact.css'
import contact from '../img/the end.png'

export function Contact (){
    return(
        <section id="Contact">
        <div className="cont-all">
            <div className="cont-title">
                <h1>Contact</h1>
                <h3 className="about">If you want to get in touch with me, talk about a collaboration project or just say hello, send your message to the following networks:</h3>
                <div className="cont-redes">
                    <a href="https://www.linkedin.com/in/alejandrosoteloramos/"><ion-icon name="logo-linkedin"></ion-icon></a>  
                    <a href="https://github.com/Ale8604"><ion-icon name="logo-github"></ion-icon></a> 
                    <a href="https://www.instagram.com/alejo_jsr/"><ion-icon name="logo-instagram"></ion-icon></a>
                    </div>
            </div>
            <div className="cont-img-banner">
                <img src={contact} alt="Banner" />
            </div>
        </div>
    </section>
    )
}