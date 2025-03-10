import React from "react";
import { BrowserRouter } from 'react-router-dom';

import Navbar from "./components/navbar";
import Profil from "./components/profil.js";
import Competences from "./components/competences.js";
import Projet from "./components/projet.js";
import Experience from "./components/experience.js";
import Formation from "./components/formation.js";
import Contact from "./components/contact.js";

function App() {
  return (
    <BrowserRouter>
       <Navbar />  

       <div>
          <Profil/>
          <Competences/>
          <Projet/>
          <Experience/>
          <Formation/>
          <Contact/>


       </div>
    
    </BrowserRouter>
   
  );
}

export default App;
