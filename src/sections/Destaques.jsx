import {useEffect, useState} from 'react';

import styles from "./Destaques.module.css";

import SectionHeader from '../components/Sections_Header';

const Destaques = () =>{

    const [banner1, setBanner1] = useState("./img/Destaques/destaque2.png");
    const [banner2, setBanner2] = useState("./img/Destaques/destaque3.png");
    const a = "./img/Destaques/destaque2.png";
    const b = "./img/Destaques/destaque1.png";
    const c = "./img/Destaques/destaque3.png";
    const d = "./img/Destaques/destaque4.png";

    useEffect(() => {
        const intervalId = setInterval(() => {
            setBanner1(prev => (prev === a ? b : a));
            setBanner2(prev => (prev === c ? d : c));
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);


    return(
        <section id="destaques" className={styles.destaques} >
            <div className='scroll_conteiner'>
                <SectionHeader span={"Destaques"} />
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