import Hero from "./layouts/Hero"
import PreLoader from "./common/components/Preloader"

function App() {
  return (
    <>
      <PreLoader/>
      <main>
        <Hero/>
      </main>
    </>
  )
}

export default App
