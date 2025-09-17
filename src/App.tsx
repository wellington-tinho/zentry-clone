import { Suspense, useState } from 'react'
import { Hero } from './components/hero'
import { Intro } from './components/intro'
import { NavBar } from './components/navbar'
import { ProductGrid } from './components/productGrid'
import { Information } from './components/information'
import { Footer } from './components/footer'

function App() {
    const [isColorLight, setIsColorLight] = useState(false);

  return (
    <Suspense fallback={<>Carregando</>}>
      <div className=' min-h-screen w-auto overflow-x-hidden bg-[#DFDFF2]'>
        <NavBar />
        <main>
          <Hero />
          <Intro />
          <div className={`${isColorLight ? "bg-[#DFDFF2] text-[#09090b]" : "bg-zinc-950 text-white"}`}>
            <ProductGrid/>
            <Information setIsColorLight={setIsColorLight}/>
          </div>
        </main>
        <Footer/>
          
      </div>
  </Suspense>
  )
}

export default App
