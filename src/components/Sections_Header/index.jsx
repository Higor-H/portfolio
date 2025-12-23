import styles from "./style.module.css";
// eslint-disable-next-line react/prop-types
const Sections_Header = ({title=null, span=null}) =>{
    return(
        <h2 className={styles.header}>{title} <span>{span}</span></h2>
    )
}
export default Sections_Header;