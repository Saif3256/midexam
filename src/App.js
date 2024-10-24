

import { list } from './Components/Cards/Cards-Description';

import { Homepage } from './Pages/HomePage';

function App() {
  return (
    <div className="App">
    <Homepage/>
    <Multiple_Cards list={list} /> 
    </div>
  );
}

export default App;
