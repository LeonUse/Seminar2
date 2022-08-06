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
import VelocityGame from './games/velocityGame';
import VarietyGame from './games/varietyGame';
import VolumeGame from './games/volumeGame';
import Quiz from './pages/quiz';
import LoadingGame from './games/loadingGame';
import VertikaleSkalierung from './games/vertikaleSkalierung';
import HorizontaleSkalierung from './games/horizontaleSkalierung';
import NotFound from './pages/notFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/lektion1' element={<Lektion1 />} />
          <Route path='/lektion2' element={<Lektion2 />} />
          <Route path='/velocityGame' element={<VelocityGame />} />
          <Route path='/varietyGame' element={<VarietyGame />} />
          <Route path='/volumeGame' element={<VolumeGame />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/loadingGame' element={<LoadingGame />} />
          <Route path='/vertikaleSkalierung' element={<VertikaleSkalierung />} />
          <Route path='/horizontaleSkalierung' element={<HorizontaleSkalierung />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App;