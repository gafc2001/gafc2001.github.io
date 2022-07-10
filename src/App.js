import React from 'react';
import {Routes, Route} from 'react-router-dom';


import {Home} from './pages/Home'
import { Login } from './pages/Login';
import { NotFound } from './pages/NotFound';
function App() {
  localStorage.getItem("lang") || localStorage.setItem("lang","en")
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="superlogin" element={<Login/>}/>
        <Route exact path="superdashboard" element={<Login/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
