import React from "react";
import './Footer.css';
import { FaHeart } from "react-icons/fa";

export function Footer() {
    return (
        <>
        <div className="footer-page">
            <div className="footer text-center fixed-bottom">
                <p className="small">Copyright ©2022 All rights reserved</p>
                <p className="small">This website is made with <FaHeart/> by Salsa</p>
            </div>
        </div>
        </>
    )
}