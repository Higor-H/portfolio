import {useEffect, useRef} from 'react';
import { useTranslation } from 'react-i18next';

import ScrollReveal from "scrollreveal";
import Typed from "typed.js";

import Btn from "../components/Btn";

import styles from "./Home.module.css";

const Home = () => {
    const { t, i18n } = useTranslation();

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

        const strings = t('home.roles', { returnObjects: true });

        const typed = new Typed(typedRef.current, {
            strings: strings,
            typeSpeed: 40,
            backSpeed: 100,
            backDelay: 1000,
            loop: true,
            smartBackspace: false
        });

        return () => {
            typed.destroy();
        };
    }, [t, i18n.language]); // Recria o efeito quando o idioma muda



    return(

        <section id="home" className={styles.home}>
            <div className={styles.home_conteiner}>
                <h3>{t('home.greeting')}</h3>
                <h1>Higor Milani</h1>
                <h3>{t('home.role_intro')} </h3>
                <h3 className={styles.typedWrapper}>
                    <span ref={typedRef} className={styles.typed_text}></span>
                </h3>
                <p>{t('home.description')}</p>

                <div className={styles.social_media}>
                    <a href="https://github.com/Higor-H" target="_blank" rel="noreferrer"  aria-label={t('home.links.github')}><i className='bx bxl-github' aria-hidden="true"></i></a>
                    <a href="https://linktr.ee/Higor_Milani" target="_blank" rel="noreferrer" aria-label={t('home.links.linktree')}><i className='bx bxs-tree' aria-hidden="true"></i></a>
                    <a href="https://www.instagram.com/higor.milani/" target="_blank" rel="noreferrer" aria-label={t('home.links.instagram')}><i className='bx bxl-instagram' aria-hidden="true"></i></a>
                    <a href="https://www.linkedin.com/in/higor-milani/" target="_blank" rel="noreferrer"  aria-label={t('home.links.linkedin')}><i className='bx bxl-linkedin' aria-hidden="true"></i></a>
                </div>

                <Btn url={`/img/${t('home.curriculum_file')}`} text_btn={t('home.download_cv')}
                     download={t('home.curriculum_name')}/>


            </div>
            <div className={styles.home_img}>
                <img src="/img/Home/home.svg" alt="Higor Milani Logo"/>
            </div>
        </section>
    )
}

export default Home;