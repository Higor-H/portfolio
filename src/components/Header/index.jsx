import  { useState, useEffect } from 'react';
import styles from "./style.module.css";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    useEffect(() => {

        

        const handleScroll = () => {
        let sections = document.querySelectorAll('section')
        let navLinks = document.querySelectorAll('header nav a')

        window.onscroll = () => {
            sections.forEach(sec => {
                let top = window.scrollY;
                let offset = sec.offsetTop - 150;
                let height = sec.offsetHeight;
                let id = sec.getAttribute('id');
                let header = document.querySelector(`.${styles.header}`);

                if(top >= offset && top < (offset + height)){
                    navLinks.forEach(links => {
                        links.classList.remove('ativa');
                        document.querySelector('header nav a[href*=' + id + ']').classList.add('ativa');
                        header.classList.toggle(`${styles.header_shadow}`, window.scrollY > 100);

                    });
                }

            });
        };

        };

        window.addEventListener('scroll', handleScroll);
        

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

        
    }, []);

    return (
        <header className={styles.header} id="header">
            <a href="#" className={styles.logo}>Portfolio</a>
            <div id="menuicon" className='menuicon'>
                <span onClick={toggleMenu}><i className={isMenuOpen ? "bx bx-x" : "bx bx-menu"}></i></span>
            </div>
            <nav className={isMenuOpen ? "navbar ativa" : "navbar"}>
                <a href="#home" className="ativa">Home</a>
                <a href="#sobre">Sobre</a>
                <a href="#timeline">Linha do Tempo</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#destaques">Destaques</a>
                <a href="#contato">Contato</a>
            </nav>
        </header>
    );
};

export default Header;