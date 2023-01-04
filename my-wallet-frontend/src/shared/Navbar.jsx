import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import { FaWallet, FaHome } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";

export function Navbar() {
    return(
        <>
        <nav className="navbar">
			<div className="container-fluid">
			  <Link className="navbar-brand" to="/"><FaWallet/> My Wallet</Link>
			  <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
			    <span className="navbar-toggler-icon"></span>
			  </button>
			</div>
			<div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
			<div className="offcanvas-header">
				<h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
				<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
			</div>
			<div className="offcanvas-body">
				<ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
					<li className="nav-item p-2 mb-2 border-opacity-25d rounded">
					    <Link className="nav-link" to="/Home"><FaHome/> Home</Link>
					</li>
					<li className="nav-item p-2 mb-2 border-opacity-25d rounded">
					    <Link className="nav-link" to="/Outcome"><GiTakeMyMoney/> My Report</Link>
					</li>
                </ul>
			</div>
		</div>
		</nav>
        </>
    )
}

export default Navbar;