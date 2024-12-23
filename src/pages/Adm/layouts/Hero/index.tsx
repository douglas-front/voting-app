import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import SideBar from '../../components/SideBar';
import { arrayNameOfVoters } from '../../../../common/untils/arrayNameOfVoters';
import { NameOfVoters } from '../../../../types/NameOfVoters';
import Card from '../../components/Card';
import { VoteWorker } from '../../../../types/VoteWorker';


export default function Hero() {
    
    const voters = localStorage.getItem("voters")
    const votersJson = voters? JSON.parse(voters) : ["sem votantes"]

    const votes = localStorage.getItem("votes")
    const resultOfVotes: VoteWorker[] = votes ? JSON.parse(votes) : [{name: "sem ganhador", votes: 0}]
    const winner = resultOfVotes.reduce((max, current) => {
        return (current.votes > max.votes) ? current : max;
    });


    const onView = localStorage.getItem("onView")

    const participants: NameOfVoters[] = [...arrayNameOfVoters]

    return(
        <section className={styles.hero}>
            <SideBar/>
            <div className={styles.cards}>
                {onView === "participants" ? participants.map((participant) => (
                    <Card nameOfWorker={participant} winner={false} votes={0}/>
                )) : ""}

                {onView === "voters" ? votersJson.map((voter: NameOfVoters) => (
                    <Card nameOfWorker={voter} winner={false} votes={0}/>
                )) : ""}

                {onView === "results" ? <Card nameOfWorker={winner.name} votes={winner.votes} winner/> : ""}
            </div>
        </section>
    )
}