import React from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../../shared/Footer'
import { Navbar } from '../../shared/Navbar'
import './Landingpage.css'
import foto from "../../images/image2.png"

export function Landingpage() {
    return(
        <>
        <Navbar/>
        
        <div className="landing-page">
            <img src={foto} alt="welcome page" className="rounded mx-auto d-block" id="welcomeimage"/>
            <Link to="/Home">
                <button type="button" className="btn btn-success mt-3">Get Started</button>
            </Link>
            
        </div>

        <Footer/>
        </>
    )
}