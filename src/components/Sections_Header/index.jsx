import styles from "./style.module.css";
const Sections_Header = ({title=null, span=null}) =>{
    return(
        <h2 className={styles.header}>{title} <span>{span}</span></h2>
    )
}
export default Sections_Header;