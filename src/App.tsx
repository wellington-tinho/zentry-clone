import { Hero } from './components/hero'
import { Intro } from './components/intro'
import { NavBar } from './components/navbar'

function App() {

  return (
    <div className=' min-h-screen w-auto overflow-x-hidden bg-[#DFDFF2]'>
      <NavBar />
      <main>
        <Hero />
        <Intro />
        <section>productGrid</section>
        <section>narrative</section>
        <section>History</section>
      </main>
      <footer>
        
      </footer>
    </div>
  )
}

export default App
