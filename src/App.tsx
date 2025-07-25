import { Hero } from './components/hero'
import { NavBar } from './components/navbar'

function App() {

  return (
    <div className=' min-h-screen w-auto overflow-x-hidden'>
      <NavBar />
      <main>
        <Hero />
        <Hero />
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
