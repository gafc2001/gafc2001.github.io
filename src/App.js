import React from 'react';
import {Routes, Route} from 'react-router-dom';


import {Home} from './pages/Home'
import LanguageState from './context/Language/LanguageState';
import { Login } from './pages/Login';
function App() {
  localStorage.getItem("lang") || localStorage.setItem("lang","en")
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="login" element={<Login/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
