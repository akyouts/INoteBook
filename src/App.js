
import './App.css';
import Navbar from './Component/Navbar';
import {BrowserRouter , Route, Routes} from 'react-router-dom'
import Home from './Component/Home';
import About from './Component/About';

import NoteState from './Context/noteState';

function App() {
  return (
    <NoteState>
    <BrowserRouter>
 
    <Routes>

      <Route path={'/'} element={<Navbar/>}>
        <Route path={'/home'} element={<Home/>}></Route>
        <Route path={'/about'} element={<About/>}></Route>
      </Route>
    </Routes>
      
   </BrowserRouter>
    </NoteState>
 
  );
}

export default App;
