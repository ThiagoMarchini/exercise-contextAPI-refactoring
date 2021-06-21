import React from 'react';
import redSignal from './images/redSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import MyContext from './MyContext';

class TrafficSignal extends React.Component {
  constructor() {
    super();

    this.renderSignal = this.renderSignal.bind(this);
  }

  renderSignal(signalColor) {
    if (signalColor === 'red') return redSignal;
    if (signalColor === 'yellow') return yellowSignal;
    if (signalColor === 'green') return greenSignal;
    return null;
  }

  render() {
    return (
      <MyContext.Consumer>
        {value => (
          <div>
            {console.log(value.signalColor)}
            <div className="button-container">
              <button onClick={() => value.changeSignal('red')} type="button">
                Red
              </button>
              <button onClick={() => value.changeSignal('yellow')} type="button">
                Yellow
              </button>
              <button onClick={() => value.changeSignal('green')} type="button">
                Green
              </button>
            </div>
            <img className="signal" src={this.renderSignal(value.signalColor)} alt="traffic signal" />
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}

export default TrafficSignal;
