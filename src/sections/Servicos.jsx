import React, { useState, useEffect } from 'react';

import ScrollReveal from "scrollreveal";


import styles from "./Servicos.module.css";

import Section_Header from '../components/Sections_Header';
import Btn from "../components/Btn";
import {data} from "../data";

const Servicos = () => {


    const [id, setId] = useState(null);

    const [isPopupOpen, setPopupOpen] = useState(false);


    function openPopup(id) {
        setPopupOpen(true);
        setId(id)
    }

    function closePopup() {
        setPopupOpen(false);
        setId(null)
    }

    /*
    useEffect(()=>{
        ScrollReveal({
            distance: '100px',
            duration: 2000,
            delay: 10,
        });
        ScrollReveal().reveal(".scroll_conteiner",{origin: 'bottom'});
    }, []);
    
*/

    //

    return(
        <section id="servicos" className={styles.servicos} >
            <div className='scroll_conteiner'>
            <Section_Header title={"Meus "} span={"Serviços"}/>
            <div  className={styles.servicos_conteiner}>

                {data.servicos.map((item, index) =>(
                <div key={index} className={styles.servico_box_index}>
                    <div  className={styles.servico_box}> 
                        <i className={item.icon}></i>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <span onClick={() => openPopup(item.id)} ><Btn  text_btn={"Leia mais"}/></span>
                    </div>

                    {isPopupOpen && item.id === id && (
                        <div  className="popup">
                            <div className="popup_content">
                                <span className="close" onClick={closePopup} >&times;</span>
                                <section  className={styles.servico_layout}>
                                    <div className={styles.servico_conteiner}>
                                        <h3>Um pouco sobre</h3>
                                        <h1>{item.popup_title}</h1>
                                        
                                        <h3><cite>"{item.popup_cite} <span>{item.popup_cite_span}</span>"</cite></h3>
                                        <p>{item.popup_cite_author}</p>
                                    </div>
                                    <div className={styles.img}>
                                        <img src={item.popup_url_big_img} alt=""/>
                                    </div>
                                </section>

                                <section className={styles.about}>
                                    <div className={styles.conteiner_img}>
                                        <img src={item.popup_url_small_img} alt=""/>
                                    </div>
                                    <div className={styles.about_text_conteiner}>
                                        <h2 className={styles.about_header}>Sobre <span>{item.popup_about_title}</span></h2>
                                        <h3>Como eu trabalho</h3>
                                        <p>{item.popup_about_description_p1}</p>
                                        <p>{item.popup_about_description_p2}</p>
                                        <p>{item.popup_about_description_p3}</p>
                                        {item.popup_btn &&(
                                            <Btn download={item.popup_btn_download} text_btn={item.popup_btn} url={item.popup_btn_url}/>
                                        )}
                                    </div>
                                </section>
                            </div>
                        </div>

                    )}
                </div>
            ))}




            </div>
            </div>
        </section>
    )
}
export default Servicos;