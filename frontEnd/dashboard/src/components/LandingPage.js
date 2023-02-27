import "../assets/css/landingPage.css";
import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage(){
    return(
        <div className="landing">
            <div className="texto">
            <h1 className="welcome">BIENVENIDOS</h1>
            <Link to="/home" >
                <button className="boton">A cocinar!</button>
            </Link>
            </div>
            
        </div>
    )
        
    
}