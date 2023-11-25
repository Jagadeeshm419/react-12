import './App.css';
import About from './Components/About';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/home'  element={<Home/>} exact />
      <Route path='/about' element={<About />} exact />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
