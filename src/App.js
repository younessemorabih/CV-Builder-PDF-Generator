import './App.css';
import "./CompenentsCV/cv.css"
import {BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Formulaire from './CompenentsCV/Formulaire';
import Navbar from './CompenentsCV/navbar';
import Pdf from './CompenentsCV/PDF';
import Expérienceprofessionnelle from './CompenentsCV/Expérienceprofessionnelle';
import Formation from './CompenentsCV/Formation';
import Compétences from './CompenentsCV/Compétences';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Formulaire/>}></Route>
        <Route path='/Home' element={<Formulaire/>}></Route>
        <Route path='/pdf' element={<Pdf/>}></Route>
        <Route path='/pdf' element={<Pdf/>}></Route>
        <Route path='/Compétences' element={<Compétences/>}></Route>
        <Route path='/expérienceprofessionnelle'element={<Expérienceprofessionnelle/>}></Route>
        <Route path='/Formation' element={<Formation/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
