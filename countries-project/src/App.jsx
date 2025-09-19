
import { Suspense } from 'react'
import './App.css'
import Countries from './components/countries/Countries'

const countriesPromise  = fetch ('https://openapi.programming-hero.com/api/all')
.then(res => res.json())


function App() {
//  const loggedIn = true;


 
 
return(
  <div> 
    <Suspense fallback={<p>Data Loading........</p>}>
    <Countries countriesPromise={countriesPromise}></Countries>

    </Suspense>
  
  
  
  
  </div>
  
  
  
  
)
      
      
     
}

export default App
