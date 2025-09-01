import { Suspense } from 'react'
import { Hero } from './components/hero'
import { Intro } from './components/intro'
import { NavBar } from './components/navbar'
import { PrductGrid } from './components/productGrid'

function App() {

  return (
    <Suspense fallback={<>Carregando</>}>
      <div className=' min-h-screen w-auto overflow-x-hidden bg-[#DFDFF2]'>
        <NavBar />
        <main>
          <Hero />
          <Intro />
          <PrductGrid/>
          <section>History</section>
        </main>
        <footer>
          
        </footer>
      </div>
  </Suspense>
  )
}

export default App
