import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ModelTest from './pages/ModelTest'
import ModelResult from './pages/ModelResult'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/test' element={<ModelTest/>}/>
      <Route path='/finalresult' element={<ModelResult/>}/>
    </Routes>
  )
}

export default App
