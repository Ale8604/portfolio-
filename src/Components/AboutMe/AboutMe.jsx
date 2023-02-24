import React from "react";
import './aboutMe.css'
import perfil from '../img/miLogo.png'


export function AboutMe(){
    return (
        <section id="AboutMe">
            <div className="cont-all">
                <div className="text-description-me">
                    <p className="biografia">
                    Soy <span className="name">Alejandro Sotelo</span>, tengo 19 años. Soy un desarrollador full Stack que busca iniciar su
                     experiencia profesional y formar parte de una empresa que me brinde la oportunidad de desarrollar nuevas habilidades y 
                     competencias para seguir creciendo en el ámbito profesional.
                    </p>
                    <br />
                    <p className="biografia">
                    Disfruto escuchar todo tipo de música y explorar mi lado creativo a través de esta, disfruto adquirir nuevos conocimientos y de
                    esa manera mejorar tanto a nivel técnico, como tambien personal.
                    </p>
                    <br />
                    <p className="biografia">
                    Apasionado por el aprendizaje tanto en el ámbito social como en lo personal si de tegnología o habilidades blandas estamos 
                    hablando.
                    </p>
                    <br />
                    <div className="cont-red">
                        <div className="title-red">
                            <h4 className="text-red">Conecta con Alejandro:</h4>
                        </div>
                        <div className="icon-red">
                            <a href="https://github.com/Ale8604"><div className="red"><ion-icon name="logo-github"></ion-icon></div></a>
                            <a href="https://www.linkedin.com/in/alejandrosoteloramos/"><div className="red"><ion-icon name="logo-linkedin"></ion-icon></div></a>
                            <a href="https://www.instagram.com/alejo_jsr/"><div className="red"><ion-icon name="logo-instagram"></ion-icon></div></a>
                        </div>
                    </div>
                </div>
                <div className="photo">
                    <img src={perfil} alt="" />
                </div>
            </div>
        </section>
    )
}