import styles from './styles.module.css';

export default function SideBar() {

    function onView(view: string){
        localStorage.setItem("onView", `${view}`)
        window.location.reload()
    }

    function clearLocalStorage(){
        localStorage.clear()
        window.alert("votação encerrada!")
        window.open("/", "_self")
    }

    return(
        <nav className={styles.side_bar}>
            <menu className={styles.menu}>
                <li onClick={()=> onView("participants")}>Participantes</li>
                <li onClick={()=> onView("results")}>Resultado</li>
                <li onClick={()=> onView("voters")}>Votantes</li>
            </menu>

            <button className={styles.button_clear} onClick={()=> clearLocalStorage()}>encerrar</button>
        </nav>
    )
}

//753159