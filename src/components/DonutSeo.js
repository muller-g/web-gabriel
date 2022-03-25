import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class DonutSeo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: ['SEO - 1', 'Google Ads - 1', 'Facebook Ads -1'],
      },
      series: [1, 1, 1],
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

export default DonutSeo;