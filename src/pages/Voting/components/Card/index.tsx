import { useRef } from 'react';
import InsertVote from '../../../../services/InsertVote';
import { NameOfVoters } from '../../../../types/NameOfVoters';
import Modal from '../../../../common/components/Modal';
import styles from './styles.module.css';

interface IProps{
    nameOfWorker: NameOfVoters
 
}

export default function Card({nameOfWorker}: IProps) {


    const articleRef = useRef<HTMLElement>(null)
    
    function insert(){
        const insertVote = new InsertVote

        insertVote.insertVote(nameOfWorker)

        articleRef.current!.style.pointerEvents = "none"

   
    }



    return(
        <>
        <Modal text='voto concluido'/>
        <article ref={articleRef} className={styles.card} onClick={()=> insert()}>
            <h2 className={styles.title}>{nameOfWorker}</h2>
        </article>
        </>
    )
}