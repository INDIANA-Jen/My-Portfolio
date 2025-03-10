import React from "react";
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFileLines} from '@fortawesome/free-solid-svg-icons';

import '../style/commun.scss'
import '../style/navbarstyle.scss'

const Navbar = () =>{

    return(
        <nav className="navbar"> {/* nav balise principale, deux div : un pour logo et un pour les elements de navigation ou lien de navigation */}
        
            {
                /*
                1=>la structure de base

                2=> pour que le liens de barre de navigation naviguent vers des itineraires specifique,
                pour cela nous devons l'envelopper dans une balise d'ancrage <a><a/>
                
                    Probleme: 
                    La page entière s'actualise lorsque nous naviguons vers le chemin indiqué ou d'une page à une autre. 
                    Cela devrait fonctionner comme une application monopage avec une navigation fluide.
                
                3=>La solution au problème est le Navlinkcomposant. 
                Il est utilisé pour les liens internes dans React. 
                Pour cela, nous devons télécharger le package React Router Dom dans l'application React.

                <nav>
                    <div>
                    </div>
                    <div>
                    <ul>
                            <li>
                                <a href="/"> Home </a>
                            </li>
                            <li>
                                <a href="/blog"> Blog </a>
                            </li>
                            <li>
                                <a href="projects"> Projects </a>
                            </li>
                            <li>
                                <a href="about"> About </a>
                            </li>
                            <li>
                                <a href="contact"> Contact </a>
                            </li>
                    </ul>
                    </div>
                </nav>

            */
            
            }
            <div className="container">

                <div className="logo">

                    <div className="logoicon">
                        <FontAwesomeIcon icon={faFileLines} size="2xl"  />
                    </div>
                     
                     <div className="logotext">
                        PORTFOLIO
                    </div>
  
                </div>

                <div className="nav-elements">
                        <ul>
                            <li>
                                <NavLink to="/">PROFIL</NavLink>
                            </li>
                            
                            <li>
                                <NavLink to="/experiences">COMPETENCES</NavLink>
                            </li>

                            <li>
                                <NavLink to="/competences">PROJETS ET REALISATION </NavLink>  
                            </li>

                            <li>
                                <NavLink to="/formation"> EXPERIENCE PROFESSIONNELLE</NavLink> 
                            </li>

                            <li>
                                <NavLink to="/projet">FORMATION ACADEMIQUE</NavLink>
                            </li>

                            <li>
                                <NavLink to="/contact">CONTACT</NavLink>
                            </li>
                        </ul>
                </div>
            </div>

        </nav>
        

    );


}

export default Navbar;