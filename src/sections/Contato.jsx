import 'react';


import SectionHeader from '../components/Sections_Header';

import styles from "./Contato.module.css";


const Contato = () =>{
    
    return(
        <section id="contato" className={styles.contato} >
            <div className='scroll_conteiner'>
                <SectionHeader title={"Contate "} span={"Me!"}/>
                <p>Ficarei feliz em ouvir de você e discutir sobre oportunidades de colaboração. Por favor, utilize os botões abaixo para me contatar por e-mail ou acessar meu perfil no LinkedIn.  </p>
                <div className={styles.contato_conteiner}>   
                        <a href="https://www.linkedin.com/in/higor-milani/overlay/contact-info/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                        <a href="mailto:milanihigor016@gmail.com">Email</a>
                </div>
            </div>
        </section>
    )
}
export default Contato;