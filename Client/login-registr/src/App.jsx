import { useState } from 'react'
import MainLayout from '../Components/Layout/MainLayout'
import Login from '../Components/Page/Login/login'
import SignUP from '../Components/Page/SignUp/signup'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Page/Home/home'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes> 
      <Route path="/" element={<MainLayout/>}>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<SignUP/>}></Route>
      </Route>
    </Routes>

      
    </>
  )
}

export default App
