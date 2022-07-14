import React from 'react';
import {Routes, Route} from 'react-router-dom';


import {Home} from './pages/Home'
import { Login } from './pages/Login';
import { NotFound } from './pages/NotFound';
import { Dashboard } from './pages/Dashboard';
import AuthState from "./context/Auth/AuthState";
function App() {
  localStorage.getItem("lang") || localStorage.setItem("lang","en")
  return (
    <AuthState>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="superlogin" element={<Login/>}/>
          <Route exact path="superdashboard" element={<Dashboard/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    </AuthState>
  );
}

export default App;
