import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Donut extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: ['React - 1', 'Javascript - 2', 'HTML - 2', 'CSS - 2'],
      },
      series: [1, 2, 2, 2],
    }
  }

  render() {

    return (
      <div className="donut">
        <Chart options={this.state.options} series={this.state.series} type="donut" width="330"/>
      </div>
    );
  }
}

export default Donut;