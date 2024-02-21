import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { LandingPage } from './components/LandingPage';
import { Marquee } from './components/Marquee';
import Player from './components/Player';

export default function App() {
  return (
    <div className='w-full h-screen bg-zinc-900 text-white'>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/play" element={<Player />} />
      </Routes>
      <Marquee />
      </BrowserRouter>
    </div>
  )
}