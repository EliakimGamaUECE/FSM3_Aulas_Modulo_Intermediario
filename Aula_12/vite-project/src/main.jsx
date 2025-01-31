import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav from './components/Nav.jsx'
import Login from './components/Login.jsx'
import Contador from './components/Contador.jsx'
import PaiMandaDados from './components/PaiMandaDados.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <Contador />
    <Login />
    <PaiMandaDados/>
  </StrictMode>,
)
