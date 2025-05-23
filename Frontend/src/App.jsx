import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import './App.css'
import FirebaseAuth from "./FirebaseAuth";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<FirebaseAuth />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </>
  )
}

export default App
