import React from "react";
import './conteiner.css'

export function Container(props){
    return (
        <section id="Proyects" className="container-proyects">
            <h2 className="title-description-proyects">Apartado donde podrás ver los proyectos realizados de manera colaborativa y personal</h2>
            <p></p>
            <div className="cont">
                <ul>
                    {props.children}
                </ul>
            </div>
    </section>
    )
}