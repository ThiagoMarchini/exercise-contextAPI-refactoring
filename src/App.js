import React from 'react';
import TrafficSignal from './TrafficSignal';
import MyContext from './MyContext';
import Cars from './Cars';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      redCar: false,
      blueCar: false,
      yellowCar: false,
      signalColor: 'red',
      changeSignal: this.changeSignal,
    }

    this.handleMoveCar = this.handleMoveCar.bind(this);
    this.changeSignal = this.changeSignal.bind(this);
  }

  changeSignal(color) {
    this.setState({
      signalColor: color,
    })
  }

  handleMoveCar(car) {
    this.setState((prevState) => ({
      [car]: !prevState[car],
    }));
  }

  render() {
    console.log(this.state);
    const context = {
      redCar: this.state.redCar,
      blueCar: this.state.blueCar,
      yellowCar: this.state.yellowCar,
      moveCar: this.handleMoveCar,
      signalColor: this.state.signalColor,
      changeSignal: this.changeSignal,
    }
    return (
      <MyContext.Provider value={context}>
        <div className="container">
          <Cars />
          <TrafficSignal />
        </div>
      </MyContext.Provider>
    );
  }
}

export default App;
