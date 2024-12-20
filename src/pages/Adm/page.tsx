import PreLoader from "../../common/components/Preloader"
import Hero from "./layouts/Hero"

export default function Adm() {

    return (
        <>
            <PreLoader />
            <main>
                <Hero/>
            </main>
        </>
    )
}