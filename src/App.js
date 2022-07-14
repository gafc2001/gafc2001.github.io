import React from 'react';

import AuthState from "./context/Auth/AuthState";
import AppRoutes from './components/Routes/AppRoutes';
function App() {
  
  localStorage.getItem("lang") || localStorage.setItem("lang","en")
  return (
    <AuthState>
      <div className="App">
        <AppRoutes/>
      </div>
    </AuthState>
  );
}

export default App;
