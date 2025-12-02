// src/App.jsx (সঠিকভাবে সেটআপ করা আছে)
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Register from './Component/Register';
import Login from './Component/Login';
import Layout from './Component/Layout';

function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
            <Route exact path='/' element = {<Register/>}/>
            <Route exact path='/login' element = {<Login/>}/>
            <Route exact path='/layout' element = {<Layout/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App