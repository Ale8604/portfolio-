import React from "react";
import './infoRed.css'

export function Info () {
    return (
        <>
            <div className="conteiner">
                <div className="cont" id=""><ion-icon name="logo-instagram" className="redes"></ion-icon></div>
                <div className="cont" id=""><ion-icon name="logo-linkedin" className="redes"></ion-icon></div>
                <div className="cont" id=""><ion-icon name="logo-github" className="redes"></ion-icon></div>
            </div>
        </>
    )
}