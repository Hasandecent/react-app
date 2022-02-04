import React from "react";
import "./footer.css"
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGooglePlusSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="social">

    <div className="services">
        <FaFacebookSquare className="icon" />
        <h2>FACEBOOK</h2>
    </div>
    <div class="services">
        <FaTwitterSquare className="icon" />
        <h2>TWITTER</h2>
    </div>
    <div class="services">
         <FaGooglePlusSquare className="icon" />
        <h2>GOOGLE+</h2>
    </div>
    <div class="services">
        <FaInstagramSquare className="icon" />
        <h2>INSTAGRAM</h2>
    </div>


    </div>
       
    )
}

export default Footer