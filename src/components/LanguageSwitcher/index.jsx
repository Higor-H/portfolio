import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './style.module.css';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();

    const changeLanguage = async (lang) => {

        try {
            localStorage.setItem('userLanguage', lang);
        } catch (error) {
            console.warn('Failed to persist user language in localStorage:', error);
        }

        await i18n.changeLanguage(lang);

        // A lógica de navegação considera que estamos na raiz ou já em um subcaminho
        const currentPath = location.pathname.replace(/^\/(pt|en)/, '');

        navigate(`/${lang}${currentPath}`);
    };

    return (
        <div className={styles.languageSwitcher}>
            <button
                onClick={() => changeLanguage('pt')}
                className={i18n.language === 'pt' ? styles.active : ''}
            >
                🇧🇷 PT
            </button>
            <button
                onClick={() => changeLanguage('en')}
                className={i18n.language === 'en' ? styles.active : ''}
            >
                🇺🇸 EN
            </button>
        </div>
    );
};

export default LanguageSwitcher;