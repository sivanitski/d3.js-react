import React, { Component } from 'react';
import './App.scss';
import LineChart from './components/line-chart/LineChart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LineChart />
      </div>
    );
  }
}

export default App;
