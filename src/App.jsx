import { useState } from 'react'
import Navbar from './components/Navbar'
import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  Routes,
  Route
} from "react-router-dom";
import Homepage from './pages/homepage'
import Lektion1 from './pages/lektion1';
import Lektion2 from './pages/lektion2';
import Lektion3 from './pages/lektion3';
import VelocityGame from './pages/velocityGame';
import VarietyGame from './pages/varietyGame';
import VolumeGame from './pages/volumeGame';
import Quiz from './pages/quiz';
import LoadingGame from './pages/loadingGame';
import ParallelGame from './pages/parallelGame';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/lektion1' element={<Lektion1 />} />
          <Route path='/lektion2' element={<Lektion2 />} />
          <Route path='/lektion3' element={<Lektion3 />} />
          <Route path='/velocityGame' element={<VelocityGame />} />
          <Route path='/varietyGame' element={<VarietyGame />} />
          <Route path='/volumeGame' element={<VolumeGame />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/loadingGame' element={<LoadingGame />} />
          <Route path='/parallelGame' element={<ParallelGame />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App;