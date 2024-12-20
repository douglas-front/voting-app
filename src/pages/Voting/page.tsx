import PreLoader from "../../common/components/Preloader";
import Hero from "./layouts/Hero";

export default function Voting() {
    return (
        <>
            <PreLoader />
            <main>
                <Hero />
            </main>
        </>
    )
}