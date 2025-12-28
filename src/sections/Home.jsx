import {useEffect, useRef} from 'react';

import ScrollReveal from "scrollreveal";
import Typed from "typed.js";

import Btn from "../components/Btn";

import styles from "./Home.module.css";

const Home = () => {

    const typedRef = useRef(null);

    const scrollRevealRef = useRef(null);

    useEffect(()=>{
        const sr = ScrollReveal({
            distance: '100px',
            duration: 2000,
            delay: 10,
        });

        scrollRevealRef.current = sr;

        sr.reveal(`.${styles.home_conteiner}`, { origin: 'top' });
        sr.reveal(`.${styles.home_conteiner} h1`, { origin: 'left' });
        sr.reveal(`.${styles.social_media}`, { origin: 'left' });

        return () => {
            if (scrollRevealRef.current) {
                scrollRevealRef.current.destroy();
                scrollRevealRef.current = null;
            }
        };
    },  []);



    useEffect(() => {
        if (!typedRef.current) return;

        const typed = new Typed(typedRef.current, {
            strings: [
                "Full Stack Developer",
                "QA Engineer",
                "Test Automation Engineer",
                "Big Data Professional",
                "Cybersecurity Enthusiast",
                "AI and Machine Learning Practitioner",
            ],
            typeSpeed: 40,
            backSpeed: 100,
            backDelay: 1000,
            loop: true,
            smartBackspace: false
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
                <h3>E atuo como </h3>
                <h3 className={styles.typedWrapper}>
                    <span ref={typedRef} className={styles.typed_text}></span>
                </h3>
                <p>Estudante de Ciências da Computação na ATITUS, apaixonado por tecnologia e desenvolvimento de software.
                    Atuo com QA, automação de testes e desenvolvimento Full Stack, além de explorar áreas como Big Data, cibersegurança e inteligência artificial,
                    sempre integrando diferentes conhecimentos em meus projetos.</p>

                <div className={styles.social_media}>
                    <a href="https://github.com/Higor-H" target="_blank" rel="noreferrer"  aria-label="GitHub de Higor Milani"><i className='bx bxl-github' aria-hidden="true"></i></a>
                    <a href="https://linktr.ee/Higor_Milani" target="_blank" rel="noreferrer" aria-label="Linktree de Higor Milani"><i className='bx bxs-tree' aria-hidden="true"></i></a>
                    <a href="https://www.instagram.com/higor.milani/" target="_blank" rel="noreferrer" aria-label="Instagram de Higor Milani"><i className='bx bxl-instagram' aria-hidden="true"></i></a>
                    <a href="https://www.linkedin.com/in/higor-milani/" target="_blank" rel="noreferrer"  aria-label="LinkedIn de Higor Milani"><i className='bx bxl-linkedin' aria-hidden="true"></i></a>
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