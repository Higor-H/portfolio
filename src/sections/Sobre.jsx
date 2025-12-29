import  { useEffect, useRef } from 'react';

import ScrollReveal from "scrollreveal";
import Typed from "typed.js";

import SectionHeader from '../components/Sections_Header';

import {getAge} from "../utils/date.js";

import styles from "./Sobre.module.css";
import {useTranslation} from "react-i18next";


const Sobre = () => {

    const { t, i18n } = useTranslation();
    const typedRef = useRef(null);

    // ScrollReveal – executa apenas no mount
    useEffect(() => {
        const sr = ScrollReveal({
            distance: '100px',
            duration: 2000,
            delay: 10,
        });

        sr.reveal(`.${styles.sobre_img}`, { origin: 'left' });
        sr.reveal(`.${styles.sobre_conteiner}`, { origin: 'right' });

        return () => {
            sr.destroy();
        };
    }, []);

    // Typed.js – recria quando o idioma muda
    useEffect(() => {
        if (!typedRef.current) return;

        const strings = t('about.typed_text', { returnObjects: true });

        const typed = new Typed(typedRef.current, {
            strings,
            typeSpeed: 40,
            backSpeed: 100,
            backDelay: 1000,
            loop: true,
            smartBackspace: false,
        });

        return () => {
            typed.destroy();
        };
    }, [t, i18n.language]);


    return(
        <section id="sobre" className={styles.sobre} >
            <div className={styles.sobre_img}>
                <img src="/img/Sobre/sobre.png" alt="Imagem de Higor Milani"/>
            </div>
            <div className={styles.sobre_conteiner} >

                <SectionHeader title={t('about.title') + " "} span={t('about.span')}/>

                <h3>
                    <span ref={typedRef} ></span>
                </h3>
                <p>{t('about.description', { age: getAge('2004-08-15') })}
                </p>
            </div>
        </section>
    )
}
export default Sobre;