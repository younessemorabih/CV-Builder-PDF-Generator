import './App.css';
import "./CompenentsCV/cv.css"
import {BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Formulaire from './CompenentsCV/Formulaire';
import Navbar from './CompenentsCV/navbar';
import Pdf from './CompenentsCV/PDF';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Formulaire/>}></Route>
        <Route path='/pdf' element={<Pdf/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
