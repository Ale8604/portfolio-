import React from "react";
import './aboutMe.css'
import About from '../img/peace sign.png'


export function AboutMe(){
    return (
        <section id="AboutMe">
            <div className="cont-all">
                <div className="cont-title">
                    <h1>About Me </h1>
                    <h3 className="about">I am Alejandro Sotelo, I am 19 years old. I am a full Stack developer looking to start his professional experience and be part of a company that gives me the opportunity to develop new skills and competencies to continue growing in the professional field.</h3>
                </div>
                <div className="cont-img-banner">
                    <img src={About} alt="About" />
                </div>
            </div>
        </section>
    )
}