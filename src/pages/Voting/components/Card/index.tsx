import { useEffect, useRef } from 'react';
import { NameOfVoters } from '../../../../types/NameOfVoters';

import styles from './styles.module.css';

interface IProps {
    nameOfWorker: NameOfVoters
    fun: () => void
}

export default function Card({ nameOfWorker, fun }: IProps) {

    const articleRef = useRef<HTMLElement>(null)
    const voter = localStorage.getItem("voter")

    function eventsNone(){

        if(voter === nameOfWorker){
            articleRef!.current!.style.pointerEvents = "none"
            return
        }

    }

    useEffect(()=>{
        eventsNone()
    },[])

    return (
        <>
            <article ref={articleRef} className={styles.card} onClick={() => fun()}>
                <h2 className={styles.title}>{nameOfWorker}</h2>
            </article>
        </>
    )
}