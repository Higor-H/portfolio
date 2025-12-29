import styles from "./style.module.css";
import {useTranslation} from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className={styles.footer}>
            <div className={styles.footer_text}>
                <p>{t('footer.copyright')}</p>
            </div>
            <div className={styles.footer_icon}>
                <a href="#home" aria-label={t('footer.back_to_top')}><i className='bx bxs-caret-up-circle' aria-hidden="true"></i></a>
            </div>
        </footer>
    )
}
export default Footer;