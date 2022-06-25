import {Home} from './pages/Home'
import LanguageState from './context/Language/LanguageState';
function App() {
  localStorage.getItem("lang") || localStorage.setItem("lang","en")
  return (
    <LanguageState>
      <div className="App">
        <Home/>
      </div>
    </LanguageState>
  );
}

export default App;
