import { NavBar } from './components/navbar'

function App() {

  return (
    <div className='bg-blue-900 min-h-screen w-screen overflow-x-hidden'>
      <NavBar />
      <main>
        <section>Hero</section>
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
