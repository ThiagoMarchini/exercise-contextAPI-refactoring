import React from 'react';
import './App.css';
import Cars from './Cars';
import MyContext from './MyContext';

class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      redCar: false,
      blueCar: false,
      yellowCar: false,
    }

    this.moveCar = this.handleMoveCar.bind(this);
  }

  handleMoveCar(carColor) {
    this.setState((prevState) => ({
      [carColor]: !prevState[carColor],
    }));
  }

  render() {
    const context = {
      redCar: this.state.redCar,
      blueCar: this.state.blueCar,
      yellowCar: this.state.yellowCar,
      moveCar: this.moveCar,
    }
    return (
      <MyContext.Provider value={context}>
        <Cars />
      </MyContext.Provider>
    );
  }
}

export default App;
