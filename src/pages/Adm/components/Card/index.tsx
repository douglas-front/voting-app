import InsertVote from '../../../../services/InsertVote';
import { NameOfVoters } from '../../../../types/NameOfVoters';
import styles from './styles.module.css';

interface IProps{
    nameOfWorker: NameOfVoters
    votes: number;
    winner: boolean
}

export default function Card({nameOfWorker, votes, winner}: IProps) {

    return(
        <article className={styles.card}>
            {winner ? <h2 className={styles.winner}>ganhador</h2> : ""}
            <h2 className={styles.title}>{nameOfWorker}</h2>
            {winner ? <span className={styles.votes}>{votes} votos</span> : ""}
            
        </article>
    )
}