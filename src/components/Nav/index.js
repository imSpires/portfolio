import React from "react";
import { Link } from "react-scroll";


function Nav() {
    return (
    <nav className="navbar">
        <div className="nav-wrap">
            <div className="logo">
                <Link className="linkto" to="/"><p>ryan.<span>dungan</span></p></Link>
            </div>

            <div className="link-wrap">
                <ul>
                    <li>
                        <Link className="center" to="/">Home</Link>
                    </li>

                    <li>
                        <Link className="center" to="about">About</Link>
                    </li>

                    <li>
                        <Link className="center" to="my-work">My Work</Link>
                    </li>

                    <li>
                        <Link className="center" to="contact">Contact</Link>
                    </li>
                    
                </ul>
            </div>

        </div>
    </nav>
    );
}

export default Nav;