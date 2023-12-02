import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Contactus from './Components/Contactus';

function App() {
  return (
    <>
      <header>
          <Header/>
      </header>
      
      <main>
          <Routes>
            <Route path='/home' element={<Home/>} exact/>
            <Route path='/about' element={<About/>} exact/>
            <Route path='/services' element={<Services/>} exact/>
            <Route path='/contactus' element={<Contactus/>} exact/>
        </Routes>
      </main>
    </>
    );
}

export default App;
