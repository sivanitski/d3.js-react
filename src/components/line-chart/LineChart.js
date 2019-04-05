import React, {Component} from 'react';
import {scaleLinear} from 'd3-scale';
import {line, curveCardinal} from 'd3-shape';
import {max} from 'd3-array';

import './LineChart.scss';

class LineChart extends Component {
  constructor (props) {
    super(props);
    this.state = {
      lines: []
    }
  }

  componentDidMount () {
    const data = [
      [
        { x: 0, y: 10 },
        { x: 1, y: 8 },
        { x: 2, y: 30 },
        { x: 3, y: 25 }
      ]
    ]

    const xScale = scaleLinear().domain([0, max(data[0], d => d.x)]).range([0, 500]);
    const yScale = scaleLinear().domain([0, max(data[0], d => d.y)]).range([400, 0]);
    const lineG = line().x(d => xScale(d.x)).y(d => yScale(d.y)).curve(curveCardinal);
    const lines = data.map(d => {
      return (
        <path d={lineG(d)} className="line"></path>
      );
    })

    this.setState({
      lines: lines
    })
  }

  render () {
    return (
      <svg width={500} height={400}>
        <g className="chart">
          {this.state.lines}
        </g>
      </svg>
    );
  }
}

export default LineChart;