import styles from "./styles.module.css";

interface IProps{
    text: string
}

export default function Modal({ text}: IProps) {

    return (
        <div className={styles.modal}>
            <h3 className={styles.title}>
                {text}
                <svg width="2.396vw" height="1.615vw" viewBox="0 0 46 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="1.06066" y1="11.9393" x2="19.0607" y2="29.9393" stroke="white" strokeWidth="3" />
                <line x1="16.9393" y1="29.9393" x2="44.9393" y2="1.93934" stroke="white" strokeWidth="3" />
                </svg>
            </h3>
        </div>
    )
}