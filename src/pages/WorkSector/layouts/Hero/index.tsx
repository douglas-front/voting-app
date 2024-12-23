import { useEffect } from 'react';
import Card from '../../components/Card';
import styles from './styles.module.css';
import stylesCard from '../../components/Card/styles.module.css'

import { workersTi } from '../../untils/arrays/arrayWorkerTI';
import { workersSecretary } from '../../untils/arrays/arrayWorkerSecretary';
import { workersPedagogic } from '../../untils/arrays/arrayWorkerPedagogic';
import { workersComercial } from '../../untils/arrays/arrayWorkerComercial';
import { workersWellBeing } from '../../untils/arrays/arrayWorkerWellBeing';
import { workersRelationShip } from '../../untils/arrays/arrayWorkerRelationShip';
import { workersInternShip } from '../../untils/arrays/arrayWorkerInternShip';
import cardAndTitle from '../../../../common/animations/cardAndTitle';

export default function Hero() {

    const sectors = [
        {
            sector: "SECRETARIA",
            workers: [...workersSecretary]
        },
        {
            sector: "PEDAGÓGICO",
            workers: [...workersPedagogic]
        },
        {
            sector: "COMERCIAL",
            workers: [...workersComercial]
        },
        {
            sector: "T.I",
            workers: [...workersTi]
        },
        {
            sector: "BEM ESTAR",
            workers: [...workersWellBeing]
        },
        {
            sector: "RELACIONAMENTO",
            workers: [...workersRelationShip]
        },
        {
            sector: "COORD. ESTÁGIO",
            workers: [...workersInternShip]
        },
    ]
    const isAccessAccepted = localStorage.getItem("accessAccepted")

    useEffect(() => {

        cardAndTitle({card: `${stylesCard.card}`, title: `${styles.title}`})
        
    }, [])

    useEffect(()=>{        
      const isAccessAcceptedCoverted = isAccessAccepted ? JSON.parse(isAccessAccepted) : false

      !isAccessAcceptedCoverted ? window.open("/", "_self") : ""
    }, [])

    return (
        <section className={styles.hero}>
            <h2 className={styles.title}>
                <span>ESCOLHA O SETOR DO FUNCIONÁRIO</span>
            </h2>
            <div className={styles.cards}>
                {sectors.map((sector, index) => (
                    <Card key={`card work sector ${index}`} nameOfSector={sector.sector} workersOfSector={sector.workers} />
                ))}
            </div>
        </section>
    )
}