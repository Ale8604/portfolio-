import React from "react";
import { Header } from "../../header/Header";
import { Info } from '../../infoRed/InfoRed'
import Dashboard from '../../img/dashboard.png'
import Deezer from '../../img/deezer.png'
import Sabujcha from '../../img/sabujcha2.png'
import tetris from '../../img/tetris.png'
import wheelOfDoom from '../../img/wheel of doom.png'
import ainoaCaps from '../../img/ainoaCapsPort.png'
import "./portfolio.css";

export function Portfolio() {
  return (
    <>
      <Header></Header>
      <div className="titles">
        <h1> Web Developer Portfolio </h1>
        <h2>
          In this section you will find all the projects done with different
          technologies, from UI/UX design to React.JS, JavaScript, Node.JS.
        </h2>
      </div>
        <div className="cont-all-button">
            <div className="cont-button">
                <button> <span>Show All</span></button>
                <button> <span>React.JS</span></button>
                <button> <span>JavaScript</span></button>
                <button> <span>Python</span></button>
                <button> <span>MongoDB</span></button>
                <button> <span>Express</span></button>
                <button> <span>HTML5</span></button>
                <button> <span>UI/UX Design</span></button>
                <button> <span>Front-End</span></button>
                <button> <span>Back-End</span></button>
                <button> <span>CSS3</span></button>
            </div>
            <h4>Showing all projects. Use the filter to list them by skills or technology.</h4>
        </div>
        <div className="content-proyects">
            <div className="cont-img" >
                <div className="panel"> <img src={Dashboard} alt="" /></div>           
               
            </div>
            <div className="cont-img" >
            <div className="panel"><img src={Deezer} alt="" /></div>  
                
            </div>
            <div className="cont-img" >
            <div className="panel"><img src={Sabujcha} alt="" /></div>  
                
            </div>
            <div className="cont-img" >
            <div className="panel"><img src={tetris} alt="" /></div>  
                
            </div>
            <div className="cont-img" >
            <div className="panel"><img src={wheelOfDoom} alt="" /></div>  
                
            </div>
            <div className="cont-img" >
            <div className="panel"><img src={ainoaCaps} alt="" /></div>  
                
            </div>
        </div>

    </>
  );
}
