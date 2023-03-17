import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from "./Pages/Home/Home"
import About from "./Components/About/About"
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
