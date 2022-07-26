import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import './App.css'
import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  Routes,
  Route
} from "react-router-dom";
import Mainpage from './pages/mainpage'
import Lektion1 from './pages/lektion1';
import Lektion2 from './pages/lektion2';
import Lektion3 from './pages/lektion3';
import VelocityGame from './pages/velocityGame';
import Quiz from './pages/quiz';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Mainpage />} />
          <Route path='/lektion1' element={<Lektion1 />} />
          <Route path='/lektion2' element={<Lektion2 />} />
          <Route path='/lektion3' element={<Lektion3 />} />
          <Route path='/velocityGame' element={<VelocityGame />} />
          <Route path='/quiz' element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App;