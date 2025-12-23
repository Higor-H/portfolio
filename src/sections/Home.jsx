import  { useEffect } from 'react';

import ScrollReveal from "scrollreveal";
import Typed from "typed.js";

import Btn from "../components/Btn";

import styles from "./Home.module.css";

const Home = () => {



    useEffect(()=>{
        ScrollReveal({
            distance: '100px',
            duration: 2000,
            delay: 10,
        });
        ScrollReveal().reveal(`.${styles.home_conteiner}`,{origin: 'top'});
        ScrollReveal().reveal(`.${styles.home_conteiner} h1`,{origin: 'left'}); 
        ScrollReveal().reveal(`.${styles.social_media}`,{origin: 'left'}); 
    });
    
    

    useEffect(() => {
        let typed = new Typed("#typed_text_home", {
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

        <section id="home" className={styles.home}>
            <div className={styles.home_conteiner}>
                <h3>Olá meu nome é</h3>
                <h1>Higor Milani</h1>
                <h3>E sou um </h3>
                <h3>
                    <span id='typed_text_home' className={styles.typed_text}></span>
                    <span className={styles.none}>Desenvolvedor Back-end</span>
                </h3>
                <p>Estudante de Ciências da Computação na ATITUS (Antiga Imed) e me dedico fortemente na área de
                    tecnologia, tanto em software como em hardware, mesmo focando na área de TI sempre que eu posso eu
                    mesclo conhecimentos de outras áreas em meus projetos, afinal a tecnologia está em tudo.</p>

                <div className={styles.social_media}>
                    <a href="https://github.com/Higor-H" target="_blank" rel="noreferrer"><i className='bx bxl-github'></i></a>
                    <a href="https://linktr.ee/Higor_Milani" target="_blank" rel="noreferrer"><i className='bx bxs-tree'></i></a>
                    <a href="https://www.instagram.com/higor.milani/" target="_blank" rel="noreferrer"><i
                        className='bx bxl-instagram'></i></a>
                    <a href="https://www.linkedin.com/in/higor-milani/" target="_blank" rel="noreferrer"><i
                        className='bx bxl-linkedin'></i></a>
                </div>

                <Btn url={"./img/Currículo-Higor_Milani.pdf"} text_btn={"Download CV"}
                     download={"Currículo - Higor_Milani"}/>


            </div>
            <div className={styles.home_img}>
                <img src="./img/Home/home.svg" alt="Higor Milani Logo"/>
            </div>
        </section>
    )
}

export default Home;