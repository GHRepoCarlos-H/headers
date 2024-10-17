import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/homePage'


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route index element={<Home />} />
      <Route path='/home' element={<Home />} />  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
