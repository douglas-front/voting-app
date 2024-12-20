import gsap from "gsap"
import styles from "./styles.module.css"

export default function animation() {
    gsap.to(`.${styles.spanText}`, {
        y: 0,
        duration: 2,
        delay: 0.2,
        ease: "power2.inOut",
        stagger: 0.2
    })
    gsap.to(`.${styles.marquee}`, {
        top: "55%",
        duration: 2,
        delay: .2,
        ease: "power2.inOut"
    })

    gsap.to(`.${styles.btn_vote}`, {
        y: 0,
        duration: 2,
        delay: 0.7,
        ease: "power2.inOut",
    })

    gsap.to(`.${styles.input_name}`, {
        y: 0,
        duration: 2,
        delay: 0.4,
        ease: "power2.inOut",
    })
}