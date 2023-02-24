import React from "react";
import './footer.css'


export function Footer(){
    return(
        <footer>
            <div className="ctn_all_footer">
                <div className="ctn_derechos_autor">
                   <h3>Todos los derechos a <span>Alejandro Sotelo</span></h3> 
                </div>
                <div className="cont_footer_redes">
                    <h3>Redes sociales: </h3>
                    <a href="https://github.com/Ale8604"><div className=""><ion-icon name="logo-github"></ion-icon></div></a>
                    <a href="https://www.linkedin.com/in/alejandrosoteloramos/"><div className=""><ion-icon name="logo-linkedin"></ion-icon></div></a>
                    <a href="https://www.instagram.com/alejo_jsr/"><div className=""><ion-icon name="logo-instagram"></ion-icon></div></a>
                </div>
            </div>
        </footer>
    )
}