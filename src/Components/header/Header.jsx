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
                            <a href="#Home" className="sections-header"><li className="underline-hover">Home</li></a>
                            <a href="#AboutMe" className="sections-header"><li className="underline-hover">About Me</li></a>
                            <a href="#Proyects" className="sections-header"><li className="underline-hover">Proyects</li></a>
                            <a href="#Contact" className="sections-header"><li className="underline-hover">Contact</li></a>
                            <label htmlFor="btn-menu"><ion-icon name="grid-outline" ></ion-icon></label>
                        </ul>
                    </div>
                    <input type="checkbox" id="btn-menu"/>
                    <div className="ctn_menu">
                        <div className="cont-menu">
                            <nav>
                                <a href="#Home" className="" htmlFor="btn-menu"><li className="">Home</li></a>
                                <a href="#AboutMe" className=""><li className="">About Me</li></a>
                                <a href="#Proyects" className=""><li className="">Proyects</li></a>
                                <a href="#Contact" className=""><li className="">Contact</li></a>
                            </nav>
                            <label htmlFor="btn-menu" className="equis_icon" ><ion-icon name="close-outline"></ion-icon></label>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}