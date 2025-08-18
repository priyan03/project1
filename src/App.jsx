import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home  from "./Components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Home" replace />} />
      <Route path="/home" element={<Home/>}/>
      <Route path="/login" element={<Login />} /> 
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
