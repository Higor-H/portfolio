import React, { useEffect } from 'react';

import ScrollReveal from "scrollreveal";

import Card_Portfolio from '../components/Card_Portfolio';
import Section_Header from '../components/Sections_Header';

import styles from "./Portfolio_sec.module.css";

const Portfolio_sec = () => {

    /*
    useEffect(()=>{
        ScrollReveal({
            distance: '100px',
            duration: 2000,
            delay: 10,
        });
        ScrollReveal().reveal(".scroll_conteiner",{origin: 'bottom'});
    });
*/

    let baseUrlImg = "/img/Portfolio/";
    return(
        <section id="portfolio" className={styles.portfolio} >
            <div className='scroll_conteiner'>
                <Section_Header title={"Meus "} span={"Projetos"}/>
                <div className={styles.portfolio_conteiner}>
                    <Card_Portfolio img={baseUrlImg + "design.jpg"} title={"Design"} description={"Exemplos de design feitos por mim."} url={"/img/Meus_Designs.pdf"} download={"Meus Designs"}/>
                    <Card_Portfolio img={baseUrlImg + "progamacao.jpg"} title={"Progamação"} description={"Meu perfil no Github com projetos."} url={"https://github.com/Higor-H"}/>
                    <Card_Portfolio img={baseUrlImg + "projetos.jpg"} title={"Desenvolvimento de projetos"} description={"Alguns projetos na mais diversas áreas."} url={"https://drive.google.com/drive/folders/1sGX-tHFoBiXg-cmX9VYfRX8Fc42pSY9A?usp=sharing"}/>
                    <Card_Portfolio img={baseUrlImg + "artigos.jpg"} title={"Artigos"} description={"Alguns artigos e escritas sobre diversos assuntos."} url={"https://drive.google.com/drive/folders/1eXaUf3gizhU_h3i712MHS4PV0vgZss87?usp=sharing"}/>
                    <Card_Portfolio img={baseUrlImg + "testes.jpg"} title={"Testes, Automatização e QA"} description={"Minha jornada na Compass UOL."} url={"https://gitlab.com/higor_sprints"}/>
                    <Card_Portfolio img={baseUrlImg + "hardware.jpg"} title={"Arduino e hardware"} description={"Meus projetos com o arduino, e linguagem C."} url={"https://drive.google.com/drive/folders/1gkrOFtNQmk66OhA0RmXxzrv7UQW3wq_w?usp=sharing"}/>
                    
                
                
                </div>
            </div>
        </section>
    )
}
export default Portfolio_sec;