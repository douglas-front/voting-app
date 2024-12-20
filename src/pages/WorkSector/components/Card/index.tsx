import styles from './styles.module.css';

interface IProps{
    nameOfSector: string
    workersOfSector: string[]
}

export default function Card({nameOfSector, workersOfSector}: IProps) {
    return(
        <article className={styles.card} onClick={()=> {localStorage.setItem("chosenEmployees", JSON.stringify(workersOfSector)); window.open("/voting", "_self")}}>
            <h2 className={styles.title}>{nameOfSector}</h2>
        </article>
    )
}