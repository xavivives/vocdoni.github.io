import React from 'react';
import ScrollContent from "./ScrollContent";
import './App.css';
import Navbar from './navbar';
import Background from './Background';

function App() {

  return (
    <div>
      <Navbar/>
      <ScrollContent/>
      <Background/>
    </div>
  );
}

export default App;
