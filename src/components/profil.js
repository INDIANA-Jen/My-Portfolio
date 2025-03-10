import React from "react";

import '../style/profilstyle.scss'

import { FaGithubSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

function Profil() {
    return(
        <div className="contenerProfil">

            <div className="imgprofilcontener">
                <div className="imgprofil">

                    <img src="/profil.jpg" className="imgp" alt=""></img>

                </div>
            </div>

            <div className="contenerLinesepa">

                <div className="linesepa"></div>

            </div>

            <div className="contenerAproposProfil">

                <div className="textSalutation">

                    <div className="bonjourjesuis">
                        <div className="textBonjour">

                            Bonjour !

                        </div>

                        <div className="textjesuis">

                            Je suis

                        </div>
                    </div>
                    
                    <div className="nomprenom">
                        Jenitat INDIANA
                    </div>

                    <div className="textdev">

                        Développeuse Web - ReactJs

                    </div>


                    <div className="textapropo">

                        Je suis une conceptrice et développeuse d'applications avec une expertise en React. J'ai travaillé sur divers projets allant de petites applications à des systèmes complexes. Mon objectif est de créer des expériences utilisateur fluides et performantes.

                    </div>

                    <div className="contenercheck">

                        <div className="textcheck">

                            Regarde mon :

                        </div>

                        <div className="checkicon">

                            <div className="contenerGit">
                                 <FaGithubSquare color="#007A7A" size={44}/>
                            </div>

                            <div className="contenerLink">
                                 <BsLinkedin color="#007A7A" size={40}/>
                            </div>

                        </div>

                    </div>

                </div>

            </div>


           
        </div>

    );
}

export default Profil;