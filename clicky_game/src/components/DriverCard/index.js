import React from "react";
import "./style.css";

function DriverCard(props) {
  return (
    <img
      className="driverImg"
      alt={props.name} 
      src={props.image}
      onClick={() => { props.increment(props.id); props.shuffle(props.id); }}
    />
  );
}

export default DriverCard;