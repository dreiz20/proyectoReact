import { IoMdWine } from "react-icons/io";
import { Link } from 'react-router-dom';
import {IconContext} from "react-icons";
import React from 'react';


const Navbar = () => {
   return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
                <div className="navbar-brand">
                        <IoMdWine />
                    <Link to="/vasos">
                                Tipo de Vasos    
                    </Link>
                </div>

                <div className="navbar-brand">
                        <IoMdWine />
                    <Link to="/films">
                        Films
                    </Link>
                </div>
                <div className="navbar-brand">
                        <IoMdWine />
                    <Link to="/people">
                        People
                    </Link>
                </div>
            </div>
        </nav>
      </div>
   );
};
export default Navbar;