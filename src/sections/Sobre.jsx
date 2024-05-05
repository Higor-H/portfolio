import React, { useState, useEffect } from 'react';

import ScrollReveal from "scrollreveal";
import Typed from "typed.js";

import Btn from "../components/Btn";
import Card from "../components/Card";
import Section_Header from '../components/Sections_Header';

import {data} from "../data";

import styles from "./Sobre.module.css";


const Sobre = () => {

    const [isPopupOpen, setPopupOpen] = useState(false);

    function openPopup() {
        setPopupOpen(true);
    }

    function closePopup() {
        setPopupOpen(false);
    }


    useEffect(()=>{
        ScrollReveal({
            distance: '100px',
            duration: 2000,
            delay: 10,
        });
        ScrollReveal().reveal(`.${styles.sobre_img}`,{origin: 'left'});
        ScrollReveal().reveal(`.${styles.sobre_conteiner}`,{origin: 'right'}); 
    });

    useEffect(() => {
        var typed = new Typed("#typed_text_sobre", {
            strings: ["Desenvolvedor Front-End", "Designer", "Progamador", "Desenvolvedor Back-End"],
            typeSpeed: 40,
            backSpeed: 100,
            backDelay: 1000,
            loop: true,
          });
        return () => {
            typed.destroy();
        };
    }, []);



    return(
        <section id="sobre" className={styles.sobre} >
            <div className={styles.sobre_img}>
                <img src="./img/Sobre/sobre.png" alt="Imagem de Higor Milani"/>
            </div>
            <div className={styles.sobre_conteiner} >

                <Section_Header title={"Sobre "} span={"mim!"}/>
                
                <h3>
                    <span id='typed_text_sobre' >s</span>
                </h3>
                <p>Sou Higor Milani, tenho 19 anos e curso Ciências da Computação na ATITUS, tento sempre abraçar o diferente, gosto de aprender e vivenciar coisas novas, sempre que aprendo algo novo eu tento implementar ou fazer algo útil com esse conhecimento. Eu amo tecnologia, poesia, arte, café e gatos.
                </p>
                <span onClick={openPopup} ><Btn  text_btn={"Leia mais"} /></span>
                
            </div>
            
           

            {isPopupOpen && (
                <div  className="popup" >
                    <div  className="popup_content" >
                        <span className="close" onClick={closePopup} >&times;</span>
                        <section className="popup_layout">
                                <Section_Header title={"Meus "} span={"Cursos"}/>
                                <div className={styles.course_conteiner} >
                                    {data.sobre.map((item, index) =>(
                                        <Card key={index}  url={item.url} title={item.title} organization={item.organization} validation={item.validation}  />
                                    ))}
                                </div>
                        </section>
                        
                    </div>
                </div>
            )}
        </section>
    )
}
export default Sobre;