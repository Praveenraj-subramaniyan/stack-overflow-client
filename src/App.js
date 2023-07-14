import React from 'react';
import { Counter } from './features/counter/Counter';
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Header from './components/Header'
import Routing from './Routing'

function App() {
  return (
    <div>
    <BrowserRouter >
    <Header/>
    <Routing/>
    </BrowserRouter>
  </div>
  );
}

export default App;
