import { useEffect } from 'react';
import styles from './styles.module.css';
import gsap from 'gsap';

export default function PreLoader() {

    useEffect(()=>{

        gsap.to(`.${styles.overlay_dark_green}`,{
            width: "48.177vw",
            duration: 1,
            ease: "power2.inOut"
        })

        gsap.to(`.${styles.overlay_light_green}`,{
            width: "13.125vw",
            duration: 1,
            delay: 0.1,
            ease: "power2.inOut"
        })

        gsap.to(`.${styles.preLoader}`,{
            width: 0,
            duration: 1,
            delay: 0.5,
            ease: "power2.inOut"
        })
        
    })

    return(
        <div className={styles.preLoader}>
            <div className={styles.overlay_light_green}></div>
            <div className={styles.overlay_dark_green}></div>
        </div>
    )
}