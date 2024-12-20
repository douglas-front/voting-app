import styles from './styles.module.css'

export default function Marquee() {
    return(
        <div className={styles.marquee}>

            <div className={styles.marquee_content}>
                <h2>funcionário do mês!</h2>
            </div>

            <div className={styles.marquee_content}>
                <h2>funcionário do mês!</h2>
            </div>
            
            <div className={styles.marquee_content}>
                <h2>funcionário do mês!</h2>
            </div>

            <div className={styles.marquee_content}>
                <h2>funcionário do mês!</h2>
            </div>
            
            <div className={styles.marquee_content}>
                <h2>funcionário do mês!</h2>
            </div>
            
            <div className={styles.marquee_content}>
                <h2>funcionário do mês!</h2>
            </div>
        </div>
    )
}