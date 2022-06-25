import {Index} from './pages/Index'
import LanguageState from './context/Language/LanguageState';
function App() {
  localStorage.getItem("lang") || localStorage.setItem("lang","en")
  return (
    <LanguageState>
      <div className="App">
        <Index/>
      </div>
    </LanguageState>
  );
}

export default App;
