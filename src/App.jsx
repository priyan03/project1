import { Routes, Route, Navigate } from "react-router-dom"

import Login from "./pages/Login"
import Register from "./pages/Register"

import "./styles/LoginStyle.css"
import "./styles/RegisterStyle.css"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />}/>
      <Route path="/login" element={<Login/>}/> 
      <Route path="/register"element={<Register/>}/>
    </Routes>
  )
}

export default App
