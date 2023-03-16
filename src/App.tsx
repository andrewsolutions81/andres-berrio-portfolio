import React from 'react';
import Header from './Components/Header/Header';
import Home from "./Pages/Home/Home"
import './App.css';

function App() {
  //tabs logic goes here
  return (
    <main className="App">
      <Header/>
      <Home />
    </main>
  );
}

export default App;
