import PropTypes from "prop-types";
import styles from "./style.module.css";

const Btn = ({
                 url,
                 text_btn,
                 download = false,
                 onClick,
                 target = "_self",
             }) => {

    // 🔹 Se tem URL → renderiza link
    if (url) {
        return (
            <a
                href={url}
                target={target}
                rel={target === "_blank" ? "noreferrer" : undefined}
                download={download || undefined}
                className={styles.btn}
            >
                {text_btn}
            </a>
        );
    }

    // 🔹 Se não tem URL → renderiza botão
    return (
        <button
            type="button"
            onClick={onClick}
            className={styles.btn}
        >
            {text_btn}
        </button>
    );
};

/**
 * Validação profissional de props:
 * - Se `url` existir → onClick é opcional
 * - Se `url` NÃO existir → onClick é obrigatório
 */
Btn.propTypes = {
    url: PropTypes.string,
    text_btn: PropTypes.string.isRequired,
    download: PropTypes.bool,
    target: PropTypes.oneOf(["_self", "_blank", "_parent", "_top"]),

    onClick: (props, propName, componentName) => {
        if (!props.url && typeof props[propName] !== "function") {
            return new Error(
                `${componentName}: a prop "onClick" é obrigatória quando "url" não é fornecida.`
            );
        }
    },
};

export default Btn;
