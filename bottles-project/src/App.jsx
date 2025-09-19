
import { Suspense } from 'react'
import './App.css'
import Bottles from './components/Bottles/Bottles'

const fetchURL = fetch('https://raw.githubusercontent.com/jhankarpHero/bottles-data/refs/heads/main/bottles.json')
.then(res => res.json())
function App() {
  

  return (
    <>

    <Suspense fallback={<p>Bottles Picture Are Loading...</p>}>

    </Suspense>
      <h1>Hello</h1>
      <Bottles fetchURL={fetchURL}></Bottles>    
      
      </>
  )
}

export default App
