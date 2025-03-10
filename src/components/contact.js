import React from "react";

import '../style/contactstyle.scss'

import { BsTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { FaMapMarkerAlt, FaLinkedin, FaGithubSquare  } from "react-icons/fa";

function Contact() {

    return (
        <div className="contenerContact">

            <div className="imgcontact">

                <div className="contactimg">

                        <img src="/profil.jpg" className="imgp" alt=""></img>

                </div>

            </div>

            <div className="titlecontact">

                Contact

            </div>

            <div className="listecontenerCont">

                <ul className="contListecontener">

                    <li>
                        <BsTelephoneFill /> 0525582213

                    </li>
                    <li>
                        <IoMdMail /> jenitatindiana@yahoo.com
                    </li>
                    <li>
                        <FaMapMarkerAlt /> Toulouse

                    </li>
                    <li>
                        <FaLinkedin /> www
                    </li>
                    <li>
                        <FaGithubSquare /> indi
                    </li>

                </ul>

            </div>
            
            
        </div>

    );
}

export default Contact;