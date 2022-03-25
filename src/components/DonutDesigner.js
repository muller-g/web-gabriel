import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class DonutDesigner extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: ['Photoshop - 4', 'After Effects - 1', 'Corel Draw - 4'],
      },
      series: [4, 4, 4],
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

export default DonutDesigner;