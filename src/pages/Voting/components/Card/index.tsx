import InsertVote from '../../../../services/InsertVote';
import { NameOfVoters } from '../../../../types/NameOfVoters';
import styles from './styles.module.css';

interface IProps{
    nameOfWorker: NameOfVoters
 
}

export default function Card({nameOfWorker}: IProps) {
    
    function insert(){
        const insertVote = new InsertVote

        insertVote.insertVote(nameOfWorker)
    }

    return(
        <article className={styles.card} onClick={()=> insert()}>
            <h2 className={styles.title}>{nameOfWorker}</h2>
        </article>
    )
}