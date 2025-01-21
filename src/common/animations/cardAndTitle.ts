import gsap from "gsap";

interface IProps {
    title: string,
    card: string
}

export default function ({ title, card }: IProps) {

    gsap.to(`.${title} span`, {
        y: 0,
        duration: 1,
        ease: "power2.inOut",
        delay: 0.6
    })

    gsap.to(`.${card}`, {
        y: 0,
        duration: 2,
        delay: 0.3,
        stagger: 0.2,
        ease: "power2.inOut"
    })
}