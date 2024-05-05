import React, { useState, useEffect } from 'react';

import ScrollReveal from "scrollreveal";

import styles from "./Destaques.module.css";

import Section_Header from '../components/Sections_Header';

const Destaques = () =>{

    const [banner1, setBanner1] = useState("./img/Destaques/destaque2.png");
    const [banner2, setBanner2] = useState("./img/Destaques/destaque3.png");
    const a = "./img/Destaques/destaque2.png";
    const b = "./img/Destaques/destaque1.png";
    const c = "./img/Destaques/destaque3.png";
    const d = "./img/Destaques/destaque4.png";

    function changeBanner() {
        
        if (banner1 == a) {
            setBanner1(b);
        } else {
            setBanner1(a);
        }

        if (banner2 == c) {
            setBanner2(d);
        } else {
            setBanner2(c);
        }
        
    }
    setInterval(changeBanner, 5000);

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

    return(
        <section id="destaques" className={styles.destaques} >
            <div className='scroll_conteiner'>
                <Section_Header span={"Destaques"} />
                <div className={styles.destaques_conteiner}>
                    <div className={styles.banner}>
                        <img src={banner1} alt=""/>
                    </div>
                    <div className={styles.banner}>
                        <img src={banner2} alt=""/>
                    </div>
                </div>
            </div>
            
        </section>
    )
}
export default Destaques;