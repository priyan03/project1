import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home  from "./Components/Home";
import About from "./Components/About";
import Joiningpage from "./Components/Joiningpage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/joiningpage" replace />} />
      <Route path="/joiningpage" element={<Joiningpage/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/login" element={<Login />} /> 
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
