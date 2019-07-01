import React, { Component } from 'react';
import DriverCard from "./components/DriverCard";
import './App.css';
import drivers from "./drivers.json";

class App extends Component {
  state = {
    drivers
  };

  removeDriver = id => {
    const drivers = this.state.drivers.filter(driver => driver.id !== id);
    this.setState({ drivers });
  };

  render() {
    return (
      <div>
        {this.state.drivers.map(driver => (
      <DriverCard
        id={driver.id}
        key={driver.id}
        image={driver.image}
      />
      ))}
      </div>
    )
  }
}

export default App;
