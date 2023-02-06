import React from "react";
import './Proyects.css'
import dezeer from '../img/deezer.png'
import tetris from '../img/tetris.png'
import dashboard from '../img/dashboard.png'
import Wheel from '../img/wheel of doom.png'
import sabujcha from '../img/sabujcha2.png'
import ainoa from '../img/ainoaCapsPort.png'

export function Proyects() {
    return (
        <section id="Proyects">
            <div className="cont-all-proyects">
                <div className="cont-titles-proyects">
                    <h2>Proyects</h2>
                    <h3>in this section you will find the projects in which I have worked during this time. </h3>
                </div>
                <div className="cards-info-proyects">
                    <div className="cont-info-proyects">
                        <div className="cont-img">
                            <img src={dezeer} alt="" />
                        </div>
                        <div className="cont-description">
                            <h3>Replica de dezeer</h3>
                            <p>The deezer replica project was developed collaboratively and the purpose was to test the knowledge and implementation of cascading styles and the layout of an application. </p>
                            <div className="cont-btn">
                                 <a href="https://replica-deezer-g1.netlify.app/"><button><span>Web site</span></button></a>
                            </div>
                        </div>
                    </div>
                    <div className="cont-info-proyects">
                        <div className="cont-img">
                            <img src={tetris} alt="" />
                        </div>
                        <div className="cont-description">
                            <h3>Tetris</h3>
                            <p>The deezer replica project was developed collaboratively and the purpose was to test the knowledge and implementation of cascading styles and the layout of an application. </p>
                            <div className="cont-btn">
                                 <a href="https://tetris-woad.vercel.app/"><button><span>Web site</span></button></a>
                            </div>
                        </div>
                    </div>
                    <div className="cont-info-proyects">
                        <div className="cont-img">
                            <img src={dashboard} alt="" />
                        </div>
                        <div className="cont-description">
                            <h3>Dashboard</h3>
                            <p>The deezer replica project was developed collaboratively and the purpose was to test the knowledge and implementation of cascading styles and the layout of an application. </p>
                            <div className="cont-btn">
                                 <a href="https://dashboard-criptos-pink.vercel.app/"><button><span>Web site</span></button></a>
                            </div>
                        </div>
                    </div>
                    <div className="cont-info-proyects">
                        <div className="cont-img">
                            <img src={Wheel} alt="" />
                        </div>
                        <div className="cont-description">
                            <h3>Wheel of Doom</h3>
                            <p>The deezer replica project was developed collaboratively and the purpose was to test the knowledge and implementation of cascading styles and the layout of an application. </p>
                            <div className="cont-btn">
                                 <a href="https://wheel-of-happy.netlify.app/"><button><span>Web site</span></button></a>
                            </div>
                        </div>
                    </div>
                    <div className="cont-info-proyects">
                        <div className="cont-img">
                            <img src={sabujcha} alt="" />
                        </div>
                        <div className="cont-description">
                            <h3>SabujCha</h3>
                            <p>The deezer replica project was developed collaboratively and the purpose was to test the knowledge and implementation of cascading styles and the layout of an application. </p>
                            <div className="cont-btn">
                                 <a href="https://matcha-1zdg5u36r-alejandrosotelo080104-gmailcom.vercel.app/"><button><span>Web site</span></button></a>
                            </div>
                        </div>
                    </div>
                    <div className="cont-info-proyects">
                        <div className="cont-img">
                            <img src={ainoa} alt="" />
                        </div>
                        <div className="cont-description">
                            <h3>Ainoa Caps</h3>
                            <p>The deezer replica project was developed collaboratively and the purpose was to test the knowledge and implementation of cascading styles and the layout of an application. </p>
                            <div className="cont-btn">
                                 <a href="https://ainoa-caps.vercel.app/"><button><span>Web site</span></button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}