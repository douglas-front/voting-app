import { useEffect } from 'react';
import Card from '../../components/Card';

import styles from './styles.module.css';

import stylesCard from '../../components/Card/styles.module.css'

import Modal from '../../../../common/components/Modal';
import InsertVote from '../../../../services/InsertVote.service';
import { NameOfVoters } from '../../../../types/NameOfVoters';
import cardAndTitle from '../../../../common/animations/cardAndTitle';

export default function Hero() {

    const insertVote: InsertVote = new InsertVote()
    const isAccessAccepted = localStorage.getItem("accessAccepted")
    const chosenEmployees = localStorage.getItem("chosenEmployees")
    const workers = chosenEmployees? [...JSON.parse(chosenEmployees)] : []

    useEffect(() => {

        const isAccessAcceptedCoverted = isAccessAccepted ? JSON.parse(isAccessAccepted) : false
        const chosenEmployeesCoverted = chosenEmployees ? JSON.parse(chosenEmployees) : false
       
        if(!isAccessAcceptedCoverted && !chosenEmployeesCoverted){
            window.open("/", "_self")
            return   
        }
        
        cardAndTitle({card: `${stylesCard.card}`, title: `${styles.title}`})

    }, [])

    function insert(worker: NameOfVoters){
        insertVote.insertVote(worker)
    }

    return (
        <section className={styles.hero}>
            <Modal text="voto concluido"/>
            <h2 className={styles.title}>
                <span>VOTE NO FUNCIONÁRIO</span>
            </h2>
            <div className={styles.cards}>
                {workers.map((worker, index)=>(
                    <Card key={`card voting ${index}`} nameOfWorker={worker} fun={()=> insert(worker)}/>
                ))}
            </div>
        </section>
    )
}