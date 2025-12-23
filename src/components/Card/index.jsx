import styles from "./style.module.css";

// eslint-disable-next-line react/prop-types
const Card = ({url=null, title, organization, validation =null}) => (

      <div id="card" className={styles.card}>
        {url ? (
            <a href={url} target="_blank" rel="noreferrer">
                <h3>{title}</h3>
                <p>{organization}</p>
            </a>
        ) : (
            <>
                <h3>{title}</h3>
                <p>{organization}</p>
            </>
        )}
        {validation && <p>Código de validação: {validation}</p>}
    </div>
);

export default Card;