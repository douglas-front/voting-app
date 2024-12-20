
import Modal from '../../../../common/components/Modal';
import ModalService from '../../../../services/ModalService';
import styles from './styles.module.css';

export default function SideBar() {

    const modalService: ModalService = new ModalService();


    function onView(view: string) {
        localStorage.setItem("onView", `${view}`)
        window.location.reload()
    }

    function clearLocalStorage() {

        localStorage.clear()

        modalService.modalServiceOpen()

        setInterval(() => {
            window.open("/", "_self")
        }, 1000);
    }



    return (
        <>
            <Modal text='votação encerrada' />
            <nav className={styles.side_bar}>
                <menu className={styles.menu}>
                    <li onClick={() => onView("participants")}>Participantes</li>
                    <li onClick={() => onView("results")}>Resultado</li>
                    <li onClick={() => onView("voters")}>Votantes</li>
                </menu>

                <button className={styles.button_clear} onClick={() => clearLocalStorage()}>encerrar</button>
            </nav>
        </>
    )
}

//753159