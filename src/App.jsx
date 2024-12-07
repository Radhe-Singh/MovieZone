import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Body from './components/Body'
import PopularDetails from './components/PopularDetails'
import { Routes,Route } from 'react-router-dom'
import NowDetails from './components/NowDetails'


function App() {

  return (
    <>
      
      <Routes>
          <Route path="/" element={<Body/>}/>
          <Route path="/movies" element={<Body/>}/>
        <Route path="/movie/Popular" element={<PopularDetails/>}/>
        <Route path="/movie/Now Trending" element={<NowDetails/>}/>
        <Route path="/movies/:index" element={<NowDetails/>}/>
      </Routes>
      
    
    </>
  )
}

export default App
