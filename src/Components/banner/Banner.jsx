import React from "react";
import './banner.css'
import banner from '../img/banner.png'


export function Banner (){
    return(
        <section id="Home">
            <div className="cont-all">
                <div className="cont-title">
                    <h1>Hi I'm Alejandro, welcome to my portfolio. </h1>
                    <h2>Take a look at it</h2>
                    <div className="cont-redes">
                      <a href="https://www.linkedin.com/in/alejandrosoteloramos/"><ion-icon name="logo-linkedin"></ion-icon></a>  
                       <a href="https://github.com/Ale8604"><ion-icon name="logo-github"></ion-icon></a> 
                        <a href="https://www.instagram.com/alejo_jsr/"><ion-icon name="logo-instagram"></ion-icon></a>
                    </div>
                </div>
                <div className="cont-img-banner">
                    <img src={banner} alt="Banner" />
                </div>
            </div>
        </section>
    )
}