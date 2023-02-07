import React from "react";
import { AboutMe } from "../AboutMe/AboutMe";
import { Banner } from "../banner/Banner";
import { Contact } from "../Contact/Contact";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { Proyects } from "../Proyects/Proyects";


export function Portfolio(){
    return (
        <>
         <Header/>
        <main>
            <Banner/>
            <Proyects/>
            <AboutMe/>
            <Contact/>
        </main>
         <Footer/>
        </>
    )
}