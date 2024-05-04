import styles from "./style.module.css";

const Btn = ({url = null, text_btn, download = null}) => {
    return(
        <>
            {download ? (
                <a id="btn" href={url} target="_blank" download={download} className={styles.btn}>{text_btn}</a>
            ) : (
                <a id="btn" href={url} target="_blank" className={styles.btn}>{text_btn}</a>
            )}
        </>
    );
}

export default Btn;