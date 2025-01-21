import { useEffect, useRef, useState } from 'react';
import Marquee from '../../components/marquee';
import styles from './styles.module.css';
import InsertVoter from '../../services/InsertVoter.service';
import { NameOfVoters } from '../../types/NameOfVoters';
import animation from './animation';
import Modal from '../../common/components/Modal';

export default function Hero() {

    const inputRef = useRef<HTMLInputElement>(null)
    const [inputValue, setInputValue] = useState<string>("")

    useEffect(() => {
        animation()
        
        localStorage.setItem("accessAccepted", JSON.stringify(false))
        localStorage.setItem("onView", "participants")
        localStorage.removeItem("chosenEmployees")
        localStorage.removeItem("voter")
    }, [])

    // localStorage.clear()

    function insert() {
        const insertVoter = new InsertVoter()
        insertVoter.InsertVoter(inputRef.current!.value.toLowerCase() as NameOfVoters);
    }

    return (
        <section className={styles.hero}>
            <Modal text={`${inputValue} já votou!`}/>
            <h1 className={styles.title}>
                <span className={styles.spanText}>
                    <span className='green'>“vote</span> para decidir o
                </span>

                <span className={styles.spanText}>
                    funcionário do <span className='green'>mês”</span>
                </span>
            </h1>
            <img className={styles.gal} src="/gal.png" alt="" />

            <div className={styles.marquee}>
                <Marquee />
            </div>

            <form className={styles.form}>
                <input
                onChange={(e)=> setInputValue(e.target.value)} ref={inputRef} placeholder='INFORME SEU NOME' className={styles.input_name} type="text" />
                <button onClick={(e) => {
                    e.preventDefault();
                    insert();
                }} 
                className={styles.btn_vote}>
                    votar
                    <svg width="8.021vw" height="1.25vw" viewBox="0 0 156 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M155.061 13.0607C155.646 12.4749 155.646 11.5251 155.061 10.9393L145.515 1.3934C144.929 0.807611 143.979 0.807611 143.393 1.3934C142.808 1.97919 142.808 2.92893 143.393 3.51472L151.879 12L143.393 20.4853C142.808 21.0711 142.808 22.0208 143.393 22.6066C143.979 23.1924 144.929 23.1924 145.515 22.6066L155.061 13.0607ZM0 13.5H154V10.5H0V13.5Z" fill="white" />
                    </svg>
                </button>
            </form>
        </section>
    )
}