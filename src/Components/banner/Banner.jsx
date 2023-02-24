import React from "react";
import "./banner.css";

export function Banner() {
  return (
    <section id="Home">
      <div className="cont-all-banner">
        <div className="cont-title">
          <h1>
            <span className="name-title">Alejandro Sotelo</span>
            <span className="dev">Desarollador Full-Stack</span>
          </h1>
          <div className="skills">
            <div className="cont-icons">
              <ion-icon name="logo-react"></ion-icon>
              <ion-icon name="logo-nodejs"></ion-icon>
              <ion-icon name="logo-html5"></ion-icon>
              <ion-icon name="logo-css3"></ion-icon>
              <ion-icon name="logo-python"></ion-icon>
              <ion-icon name="logo-javascript"></ion-icon>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
