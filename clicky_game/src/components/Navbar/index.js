import React from "react";
import "./style.css";



function Navbar(props) {
    const messageStyle = {
        color: `${props.messageColor}`
    };
    return <div>
        <nav class="navbar">
            <ul>
                <li className="brand">
                    <img src="https://www.formula1.com/etc/designs/fom-website/images/f1_logo.svg" 
                    class="logo"
                    alt="F1"></img>
                </li>
                <li className="title">
                    Formula 1 Clicky Game
                    <p style={messageStyle}>{props.message}</p>
                </li>
                <li>
                    <span>
                        <strong>Score: </strong> 
                        {props.score}
                    </span>
                    <span>
                        <strong>High Score: </strong> 
                        {props.highScore}
                    </span>
                </li>
            </ul>
        </nav>
    </div>
}
export default Navbar;