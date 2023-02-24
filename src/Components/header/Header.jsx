import React from "react";
import './header.css'
import logo from '../../svg/dev.svg'

export function Header (){
    return (
        <div className="content-all">
            <header>
                <nav>
                    <div className="logo">
                        <img src={logo} alt="Logo"  className="img-logo"/>
                        <h2>Alejandro Sotelo</h2>
                    </div>
                    <div className="nav-cont">
                        <ul className="navegacion">
                            <a href="#Home"><li className="underline-hover">Home</li></a>
                            <a href="#AboutMe"><li className="underline-hover">About Me</li></a>
                            <a href="#Proyects"><li className="underline-hover">Proyects</li></a>
                            <a href="#Contact"><li className="underline-hover">Contact</li></a>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
}