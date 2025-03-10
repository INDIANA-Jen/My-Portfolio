import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import '../style/projetstyle.scss';


function Projet() {

    const settings = {
        
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "10px",
        slidesToShow: 3,
        //slidesToScroll: 3,
        dots: true, // permet d'afficher des points de navigation sous le carrousel, permettant aux utilisateurs de voir quelle diapositive est actuellement affichée et de naviguer facilement entre les diapositives.
        speed: 500,
        variableWidth: true, // pour activer le width de carousel 
        //variableTop: true
        

      };

    return (
        <div className="contenerProjReal">

            <div className="titleProjReal">

                <div className="RealProTitle">

                    Projet et Realisation

                </div>
                
                <div className="lineTitlePRO">

                </div>

                

            </div>

            <div className="projteslick">

                <div className="slider-contener">

                    <Slider {...settings}>             

                        {data.map((d) => (

                            <div key={d.name} className="slickcontener">

                                <div className="imgslick">
                                    <img src={d.img} className="slickimg" alt=""/>
                                </div>

                                <div className="slickpropo">
                                    <p>{d.name}</p>
                                    <p>{d.review}</p>
                                    <button className="boutonslick">Projet</button>
                                </div>
                                
                            </div>

                        ))}
                    </Slider>    
                </div>

            </div>

             
        </div>
    )

}

const data = [

    {
        name: ` 1 mimi`,
        img : `/profil.jpg`,
        review: `balbalanabnhdghdhjdhjdbdh`
    },

    {
        name: `2 mimi`,
        img : `/profil.jpg`,
        review: `balbalanabnhdghdhjdhjdbdh`
    },

    {
        name: `3 mimi`,
        img : `/profil.jpg`,
        review: `balbalanabnhdghdhjdhjdbdh`
    },

    {
        name: `4 mimi`,
        img : `/profil.jpg`,
        review: `balbalanabnhdghdhjdhjdbdh`
    },

    {
        name: `5 mimi`,
        img : `/profil.jpg`,
        review: `balbalanabnhdghdhjdhjdbdh`
    },

    {
        name: `6 mimi`,
        img : `/profil.jpg`,
        review: `balbalanabnhdghdhjdhjdbdh`
    }





]

export default Projet;