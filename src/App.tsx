import React from 'react';
import './App.scss';
import Header from "./header/Header";
import Main from "./main/Main";
import Projects from "./my-works/Projects";
import Options from "./options/Options";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";
import {ParticleBackground} from "./main/Particles";
import {Skills} from "./skills/Skills";

export function App() {
    return (
        <>
            <div className="App">
                <ParticleBackground/>
                <Header/>
                <Main/>
                <Skills/>
                <Projects/>
                <Options/>
                <Contacts/>
                <Footer/>
            </div>
        </>
    );
}


