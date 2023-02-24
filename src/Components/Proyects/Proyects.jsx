import React from "react";
import './Proyects.css'

export function Proyects({img, name, context, deploy, Git}) {
    return (
                <li className="card-proyects">
                    <img src={img} alt="title" />
                    <div className="cont-context">
                        <h2 className="title-proyects">{name}</h2>
                        <p className="context-proyects">{context}</p> 
                        <div className="links">
                            <a href={deploy} className="deploy">Deploy del poryecto</a>
                            <a href={Git} className="git">GitHub</a>
                        </div>                  
                    </div>
                </li>
    )
}