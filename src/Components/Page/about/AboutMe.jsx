import React from "react";
import { Info } from "../../infoRed/InfoRed"
import { Link } from "react-router-dom";
import './about.css'


export function About () {
    return (
        <>
            <div className="cont-all">
                <Info></Info>
                <div className="cont-title">
                <h1 className="welcome">Welcome, my name is Alejandro Sotelo <span></span></h1>
                <h1 className="subtitles">I am a full-stack developer, take a look at my portfolio and feel free to check out my      latest projects. <span></span></h1>
                </div>
            </div>
            <div className="btn">
                   <Link to='/Portfolio'><button className="cont-btn"><span>Portfolio</span><ion-icon name="chevron-forward-outline"></ion-icon></button></Link> 
                </div>
        </>
    )
}