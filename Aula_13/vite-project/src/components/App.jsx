
import Nav from './Nav.jsx'
import Login from './Login.jsx'
import Contador from './Contador.jsx'
import Footer from './Footer.jsx'
import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'

export default function App() {

  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/contador' element={<Contador/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}


