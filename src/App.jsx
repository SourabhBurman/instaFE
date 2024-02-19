import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Componenets/Dashboard'
import Signup from './Componenets/Signup'
import Login from './Componenets/Login'
import Navbar from './Componenets/Navbar'

function App() {
 

  return (
    <>
     <Navbar />
  <Routes>
    <Route path='/' element={<Dashboard />}/>
    <Route  path='/signup' element={<Signup />}/>
    <Route  path='/login' element={ <Login />}/>
  </Routes>
    </>
  )
}

export default App
