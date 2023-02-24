import React from "react";
import './Proyects.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

export function Proyects({img, name, context, deploy, Git}) {
    AOS.init();
    return (
        <div data-aos="flip-left">
                <li className="card-proyects" data-aos="fade-down">
                    <img src={img} alt="title" />
                    <div className="cont-context" >
                        <h2 className="title-proyects">{name}</h2>
                        <p className="context-proyects">{context}</p> 
                        <div className="links">
                            <a href={deploy} className="deploy">Deploy del poryecto</a>
                            <a href={Git} className="git">GitHub</a>
                        </div>                  
                    </div>
                </li>
        </div>

    )
}