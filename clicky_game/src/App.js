import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CardBody from "./components/CardBody";
import DriverCard from "./components/DriverCard";
import Footer from "./components/Footer";
import './App.css';
import drivers from "./drivers.json";

class App extends Component {
  state = {
    drivers,
    score: 0,
    highScore: 0,
    clicked: [],
    message: "Select an image to begin.",
    messageColor: "white"
  };

  shuffle = id => {
    this.setState({
      drivers: this.state.drivers.sort(() => ( 0.5 - Math.random() ))
    });
  };

  increment = id => {
    let ids = this.state.clicked
    const incorrect = ids.includes(id);
    if(!incorrect) {
      this.state.clicked.push(id);
      let newScore = this.state.score + 1;
      this.setState({score: newScore});
      if(newScore === 12) {
        this.setState({
          score: 0,
          clicked: [],
          highScore: newScore,
          message: "You win!",
          messageColor: "green"

        });
      } else if (newScore > this.state.highScore) {
        this.setState({
          highScore: newScore,
          message: "Correct!",
          messageColor: "green"
        });
      } else {
        this.setState({
          message: "Correct!",
          messageColor: "green"
        });
      }
    } else {
      this.setState({
        score: 0,
        clicked: [],
        message: "Wrong!  Try again!",
        messageColor: "red"
      })
    }
  };

  render() {
    return (
      <div className="app">
        <Navbar 
          message={this.state.message}
          messageColor={this.state.messageColor}
          score={this.state.score}
          highScore={this.state.highScore}
        />
        <Header />
        <CardBody>
          {this.state.drivers.map( (drivers, i) => (
            <DriverCard 
              id={drivers.id}
              name={drivers.name}
              image={drivers.image}
              key={i}
              increment={this.increment}
              shuffle={this.shuffle}
            />
          ))}
        </CardBody>
      <Footer />
      </div>
    );
  };
}

export default App;
