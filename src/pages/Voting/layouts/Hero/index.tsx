import { useEffect } from 'react';
import Card from '../../components/Card';
import styles from './styles.module.css';
import stlesCard from '../../components/Card/styles.module.css'
import gsap from 'gsap';
import Modal from '../../../../common/components/Modal';

export default function Hero() {

 
    const isAccessAccepted = localStorage.getItem("accessAccepted")
    const chosenEmployees = localStorage.getItem("chosenEmployees")

    const workers = chosenEmployees? [...JSON.parse(chosenEmployees)] : []

    useEffect(() => {

        gsap.to(`.${styles.title} span`, {
            y: 0,
            duration: 1,
            ease: "power2.inOut",
            delay: 0.6
        })

        gsap.to(`.${stlesCard.card}`, {
            y: 0,
            duration: 2,
            delay: 0.3,
            stagger: 0.2,
            ease: "power2.inOut"
        })

    }, [])

    useEffect(()=>{        
      const isAccessAcceptedCoverted = isAccessAccepted ? JSON.parse(isAccessAccepted) : false
      const chosenEmployeesCoverted = chosenEmployees ? JSON.parse(chosenEmployees) : false
        
      !isAccessAcceptedCoverted && !chosenEmployeesCoverted ? window.open("/", "_self") : ""
    }, [])

    return (
        <section className={styles.hero}>
            <h2 className={styles.title}>
                <span>VOTE NO FUNCIONÁRIO</span>
            </h2>
            <div className={styles.cards}>
                {workers.map((worker)=>(
                    <Card nameOfWorker={worker}/>
                ))}
            </div>
        </section>
    )
}