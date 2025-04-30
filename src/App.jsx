
import { Route, Router, Routes } from 'react-router'
import './App.css'
import Login from './components/Login'
import Success from './components/Success'
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  )
}

export default App
