import React from "react";

import "../style/competencestyle.scss";


function Competences() {

    return(
        <div className="contenerCompetence">
            <div className="titlecompe">

                <div className="comptitle">
                    Competences
                </div>

                <div className="linecomptitle">

                </div>
               

            </div>

            <div className="listeToutComp">

                <div className="listecompetence">

                    <div className="listeOnecomp">

                        <div className="titleDeveloppement">

                            <div className="developpementTitle">
                                    Développement
                            </div>

                        </div>

                        <div className="developpementList">

                            <ul /*className="listDeveloppement"*/>

                                <li> Fronted </li>

                            </ul>

                        </div>


                    </div>

                    <div className="listeTwocomp">

                        <div className="langframtitle">

                            <div className="titleframlang" >
                                Langages & Frameworks
                            </div>

                        </div>

                        <div className="listelangfram">

                            <ul /*className="langframliste"*/>

                                <li>React</li>
                                <li>JavaScript</li>
                                <li>Python</li>

                            </ul>               

                        </div>


                    </div>

                    <div className="listeThreecomp">

                        <div className="titleBD">

                            <div className="BDtitle">

                                Base de donnees

                            </div>

                        </div>

                        <div className="listeBD">

                            <ul /*className="BDliste"*/>

                                <li>MySQL</li>

                            </ul>

                        </div>

                    </div>

                    <div className="listeforFDS">

                        <div className="titleFDS">

                            <div className="FDStitle">

                                Feuilles de styles

                            </div>

                        </div>

                        <div className="listFDS">

                            <ul /*className="FDSlist"*/>

                                <li>SASS</li>

                            </ul>

                        </div>

                    </div>

                    <div className="listefiveOutilstech">

                        <div className="titleoutTech">

                            <div className="techouttitle">
                                Outils & Technologies
                            </div>

                        </div>

                        <div className="listoutTech">

                            <ul /*</div>className="outtechList"*/>

                                <li>GitHub</li>

                            </ul>

                        </div>

                    </div>

                    <div className="sixcontener">

                        <div>
                            en attente
                        </div>

                    </div>

                </div>
            </div>
            
        </div>
    );
    
}

export default Competences;