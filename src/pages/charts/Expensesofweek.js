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


export default class Expensesofweek extends Component {

    
 
    constructor(props) {
        super(props);
    
        this.state = {
          options: {
            chart: {
              width: 60,
              height: 60,
              type: 'radialBar'
            },
            plotOptions: {
              radialBar: {
                startAngle: 0,
                endAngle: 360,
                strokeWidth: '8',
                hollow: {
                  margin: 2,
                  size: '45%'
                },
                track: {
                  strokeWidth: '50%',
                  background: borderColor
                },
                dataLabels: {
                  show: true,
                  name: {
                    show: false
                  },
                  value: {
                    formatter: function (val) {
                      return '$' + parseInt(val);
                    },
                    offsetY: 5,
                    color: '#697a8d',
                    fontSize: '13px',
                    show: true
                  }
                }
              }
            },
            fill: {
              type: 'solid',
              colors: config.colors.primary
            },
            stroke: {
              lineCap: 'round'
            },
            grid: {
              padding: {
                top: -10,
                bottom: -15,
                left: -10,
                right: -10
              }
            },
            states: {
              hover: {
                filter: {
                  type: 'none'
                }
              },
              active: {
                filter: {
                  type: 'none'
                }
              }
            }
          },
          series: [65]
        }
      }
  render() {
    return (
        <Chart options={this.state.options} series={this.state.series} type="radialBar" width={60} height={57.7} />
    )
  }
}
