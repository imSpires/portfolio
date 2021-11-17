import React, { useState, useEffect } from "react";
import logo from "../../images/logo.png"
import {Link} from "react-scroll";


function Nav() {
    return (
    <nav className="navbar">
        <div className="nav-wrap">
            <div className="logo">
                <img src={logo} className="imglogo" alt="logo" />
            </div>

            <div className="link-wrap">
                <ul>
                    <li>
                        <Link className="center" to="/">Home</Link>
                    </li>

                    <li>
                        <Link className="center" to="/about">About</Link>
                    </li>

                    <li>
                        <Link className="center" to="/portfolio">Portfolio</Link>
                    </li>

                    <li>
                        <Link className="center" to="/contact">Contact</Link>
                    </li>
                    
                </ul>
            </div>

        </div>
    </nav>
    );
}

export default Nav;