import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import ProductAllPage from './page/ProductAllPage'
import LoginPage from './page/LoginPage'
import Navbar from './components/Navbar'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'  
import PrivateRoute from './routes/PrivateRoute'

const App = () => {
  const [authenticated, setAuthenticated] = useState(false)
  const navigate = useNavigate()
  
  const handleLogin = (e) => {
    console.log('Login User')
    e.preventDefault()
    setAuthenticated(true)
    navigate('/')
  }

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<ProductAllPage />} />
        <Route path='/login' element={<LoginPage handleLogin={handleLogin}/>} />
        <Route path='/product/:id' element={<PrivateRoute authenticated={authenticated} />} />
      </Routes>
    </div>
    
  )
}

export default App
