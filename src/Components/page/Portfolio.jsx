import React from "react";
import { AboutMe } from "../AboutMe/AboutMe";
import { Banner } from "../banner/Banner";
import { Contact } from "../Contact/Contact";
import { Container } from "../container/Container";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { Proyects } from "../Proyects/Proyects";
import data from '../../json/data.json'


export function Portfolio(){
    return (
        <>
         <Header/>
        <main>
            <Banner/>
            <AboutMe/>
            <Container>
                {data.map(i => {
                    return <Proyects
                        key={i.id}
                        name={i.title}
                        img = {i.img}
                        context={i.description}
                        deploy={i.deploy}
                        Git={i.GitHub}
                        />
                })}
            </Container>
            <Contact/>
        </main>
         <Footer/>
        </>
    )
}