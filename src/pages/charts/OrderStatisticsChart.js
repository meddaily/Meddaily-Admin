import React, { Component } from 'react'
import Chart from 'react-apexcharts'

let config = {
    colors: {
      primary: '#696cff',
      secondary: '#8592a3',
      success: '#71dd37',
      info: '#03c3ec',
      warning: '#ffab00',
      danger: '#ff3e1d',
      dark: '#233446',
      black: '#000',
      white: '#fff',
      body: '#f4f5fb',
      headingColor: '#566a7f',
      axisColor: '#a1acb8',
      borderColor: '#eceef1'
    }
  };
 const  cardColor = config.colors.cardColor;
 const  axisColor = config.colors.axisColor;
const headingColor = config.colors.headingColor;
const borderColor = config.colors.borderColor;


export default class OrderStatisticsChart extends Component {

    
 
    constructor(props) {
        super(props);
    
        this.state = {
          options: {
            chart: {
              height: 165,
              width: 130,
              type: 'donut'
            },
            labels: ['Electronic', 'Sports', 'Decor', 'Fashion'],
         
            colors: [config.colors.primary, config.colors.secondary, config.colors.info, config.colors.success],
            stroke: {
              width: 5,
              colors: cardColor
            },
            dataLabels: {
              enabled: false,
              formatter: function (val, opt) {
                return parseInt(val) + '%';
              }
            },
            legend: {
              show: false
            },
            grid: {
              padding: {
                top: 0,
                bottom: 0,
                right: 15
              }
            },
            plotOptions: {
              pie: {
                donut: {
                  size: '75%',
                  labels: {
                    show: true,
                    value: {
                      fontSize: '1.5rem',
                      fontFamily: 'Public Sans',
                      color: headingColor,
                      offsetY: -15,
                      formatter: function (val) {
                        return parseInt(val) + '%';
                      }
                    },
                    name: {
                      offsetY: 20,
                      fontFamily: 'Public Sans'
                    },
                    total: {
                      show: true,
                      fontSize: '0.8125rem',
                      color: axisColor,
                      label: 'Weekly',
                      formatter: function (w) {
                        return '38%';
                      }
                    }
                  }
                }
              }
            }
          },
          series: [85, 15, 50, 50],
        
        }
      }
  render() {
    return (
        <Chart options={this.state.options} series={this.state.series} type="donut" width={130} height={137.55} />
    )
  }
}
