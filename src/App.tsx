import { Hero } from './components/hero'
import { NavBar } from './components/navbar'

function App() {

  return (
    <div className='bg-zinc-900 min-h-screen w-auto overflow-x-hidden'>
      <NavBar />
      <main>
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
