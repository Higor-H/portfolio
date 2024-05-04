import styles from "./style.module.css";

const Footer = () =>{
    return(
        <footer className={styles.footer}>
            <div className={styles.footer_text}>
                <p>Copyright &copy; 2024. Todos direitos reservados!</p>
            </div>
            <div className={styles.footer_icon}>
                <a href="#home"><i className='bx bxs-caret-up-circle'></i></a>
            </div>
        </footer>
    )
}
export default Footer;