import styles from "./style.module.css";

// eslint-disable-next-line react/prop-types
const Card_Portfolio = ({img, title, description, url, download=null }) => {
    return(
        <div className={styles.Card_Portfolio}>
            <img src={img} alt=""/>
            <div className={styles.Card_Portfolio_conteiner}>
                <h4>{title}</h4>
                <p>{description}</p>
                <a href={url} target="_blank" download={download} rel="noreferrer"><i className='bx bx-link-external'></i></a>
            </div>
        </div>
    )
}
export default Card_Portfolio;