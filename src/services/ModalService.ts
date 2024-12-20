import gsap from "gsap";
import styles from '../common/components/Modal/styles.module.css';

export default class ModalService{

    public modalServiceOpen(){
        gsap.to(`.${styles.modal}`,{
            x: 0,
            duration: 0.5,
            ease: "power2.inOut",
        })
    }
}