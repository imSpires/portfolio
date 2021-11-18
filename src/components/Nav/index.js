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
                        <Link className="center" to="/">home( )</Link>
                    </li>

                    <li>
                        <Link className="center" to="about">about( )</Link>
                    </li>

                    <li>
                        <Link className="center" to="my-work">myWork( )</Link>
                    </li>

                    <li>
                        <Link className="center" to="contact">contact( )</Link>
                    </li>
                    
                </ul>
            </div>

        </div>
    </nav>
    );
}

export default Nav;