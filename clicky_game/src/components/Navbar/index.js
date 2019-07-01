import React from "react";
import "./style.css";

function Navbar(props) {
    return <div>
        <nav class="navbar">
            <ul>
                <li className="brand">
                    <img src="https://www.formula1.com/etc/designs/fom-website/images/f1_logo.svg" class="logo"></img>
                </li>
                <li className="title">
                    Formula 1 Clicky Game
                </li>
                <li>
                    <span>
                        <strong>Score: </strong> 
                        {props.score}
                    </span>
                    <span>
                        <strong>Top Score: </strong> 
                        {props.topScore}
                    </span>
                </li>
            </ul>
        </nav>
    </div>
}
export default Navbar;