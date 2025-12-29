import { useState, useEffect, useRef } from 'react';
import styles from "./style.module.css";
import LanguageSwitcher from "../LanguageSwitcher/index.jsx";
import { useTranslation } from "react-i18next";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const headerRef = useRef(null);
    const { t } = useTranslation();

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('header nav a');

        const handleScroll = () => {
            const top = window.scrollY;

            sections.forEach((sec) => {
                const offset = sec.offsetTop - 150;
                const height = sec.offsetHeight;
                const id = sec.getAttribute('id');

                if (top >= offset && top < offset + height) {
                    navLinks.forEach(link => link.classList.remove('ativa'));

                    const activeLink = document.querySelector(
                        `header nav a[href*='${id}']`
                    );

                    activeLink?.classList.add('ativa');
                }
            });

            if (headerRef.current) {
                headerRef.current.classList.toggle(
                    styles.header_shadow,
                    window.scrollY > 100
                );
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header ref={headerRef} className={styles.header} id="header">
            <a href="#" className={styles.logo}>Portfolio</a>

            <nav className={isMenuOpen ? "navbar ativa" : "navbar"}>
                <a href="#home" className="ativa">{t('header.home')}</a>
                <a href="#sobre">{t('header.about')}</a>
                <a href="#timeline">{t('header.timeline')}</a>
                <a href="#portfolio">{t('header.portfolio')}</a>
                <a href="#destaques">{t('header.highlights')}</a>
                <a href="#contato">{t('header.contact')}</a>
            </nav>

            <LanguageSwitcher />

            <div id="menuicon" className="menuicon">
                <span onClick={toggleMenu}>
                    <i className={isMenuOpen ? "bx bx-x" : "bx bx-menu"}></i>
                </span>
            </div>
        </header>
    );
};

export default Header;
