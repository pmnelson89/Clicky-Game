import React from "react";
import "./style.css";

function CardBody(props) {
    return <div className="body">
        <div className="container">
            {props.children}
        </div>
    </div>
}

export default CardBody;