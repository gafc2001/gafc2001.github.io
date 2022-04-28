import {Index} from './pages/Index'
function App() {
  if(!window.localStorage.getItem("lang")) window.localStorage.setItem("lang","en")
  return (
    <div className="App">
      <Index/>
    </div>
  );
}

export default App;
