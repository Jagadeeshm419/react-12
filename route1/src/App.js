import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Create from './Components/Create';
import Read from './Components/Read';

function App() {
  return (
    <div className="App">
      <h1>Welcome Page</h1>
      <BrowserRouter>
      <Routes>
        <Route path='/create' element={<Create />} exact />
        <Route path='/read' element={<Read />} exact />
      </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
