import React from "react";
import "./style.css";

function Header() {
    return <div>
        <header className="header">
            <h2>Click on an image to earn points, but don't click any image more than once!</h2>
            <h4>Clicking an image more than once will reset the game.</h4>
        </header>
    </div>
}
export default Header;