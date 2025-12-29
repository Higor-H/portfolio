import 'react';
import {useTranslation} from "react-i18next";


import SectionHeader from '../components/Sections_Header';

import styles from "./Contato.module.css";


const Contato = () =>{
    const { t } = useTranslation();

    return(
        <section id="contato" className={styles.contato} >
            <div className='scroll_conteiner'>
                <SectionHeader title={t('contact.title') + " "} span={t('contact.span')}/>
                <p>{t('contact.description')}</p>
                <div className={styles.contato_conteiner}>
                        <a href="https://www.linkedin.com/in/higor-milani/overlay/contact-info/" target="_blank" rel="noopener noreferrer">{t('contact.linkedin_btn')}</a>
                        <a href="mailto:milanihigor016@gmail.com">{t('contact.email_btn')}</a>
                </div>
            </div>
        </section>
    )
}
export default Contato;