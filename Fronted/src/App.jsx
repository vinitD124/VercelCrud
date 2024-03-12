import './App.css'
import {Routes,Route} from "react-router-dom"
import Form from './Pages/Form'
import Home from './Pages/Home'

function App() {


  return (
    <>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/form' element={<Form/>}></Route>
    </Routes>
    </>
  )
}

export default App
