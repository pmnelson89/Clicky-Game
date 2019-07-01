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
    topScore: 0,
    clicked: [],
    message: "Select an image to begin.",
    messageColor: "white"
  };

  shuffle = id => {
    this.setState({
      drivers: this.state.drivers.sort(function(a,b){
        return 0.5 - Math.random();
      })
    })
  }

  increment = id => {
    let ids = this.state.selected
    const incorrect = ids.includes(id);
    if(!incorrect) {
      this.state.clicked.push(id);
      let newScore = this.state.score + 1;
      this.setState({score: newScore});
      if(newScore === 12) {
        this.setState({
          score: 0,
          clicked: [],
          topScore: newScore,
          message: "You win!",
          messageColor: "success"

        });
      } else if (newScore > this.state.topScore) {
        this.setState({
          topScore: newScore,
          message: "Correct! New high score!!!",
          messageColor: "success"
        });
      } else {
        this.setState({
          message: "Correct!",
          messageColor: "success"
        });
      }
    } else {
      this.setState({
        score: 0,
        clicked: [],
        message: "Wrong!  Try again!",
        messageColor: "danger"
      })
    }
  };

  render() {
    return (
      <div className="app">
        <Navbar 
          score={this.state.score}
          topScore={this.state.topScore}
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
