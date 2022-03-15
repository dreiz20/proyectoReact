import { IoMdWine } from "react-icons/io";
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import "../css/Navbar.css";
import React from 'react';


const Navbar = () => {
   return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
            <Link className="text-3xl font-bold font-heading" to="/">
              <img className="h-2 navbar-logo " src={logo} alt="logo" />
            </Link>
            <div className="navbar-brand">
                <IoMdWine />
                <Link style={{ color: 'white', textDecoration: 'inherit'}} to="/vasos">
                    Species
                </Link>
            </div>

                <div className="navbar-brand">
                        <IoMdWine />
                        <Link style={{ color: 'white', textDecoration: 'inherit'}} to="/films">
                            Films
                        </Link>
                </div>
                <div className="navbar-brand">
                        <IoMdWine />
                    <Link style={{ color: 'white', textDecoration: 'inherit'}} to="/people">
                        People
                    </Link>
                </div>
            </div>
        </nav>
      </div>
   );
};
export default Navbar;