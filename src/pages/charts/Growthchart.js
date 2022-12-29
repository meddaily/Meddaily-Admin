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


export default class Growthchart extends Component {

    
 
    constructor(props) {
        super(props);
    
        this.state = {
          options: {
            labels: ['Growth'],
            chart: {
              height: 240,
              type: 'radialBar'
            },
            plotOptions: {
              radialBar: {
                size: 150,
                offsetY: 10,
                startAngle: -150,
                endAngle: 150,
                hollow: {
                  size: '55%'
                },
                track: {
                  background: cardColor,
                  strokeWidth: '100%'
                },
                dataLabels: {
                  name: {
                    offsetY: 15,
                    color: headingColor,
                    fontSize: '15px',
                    fontWeight: '600',
                    fontFamily: 'Public Sans'
                  },
                  value: {
                    offsetY: -25,
                    color: headingColor,
                    fontSize: '22px',
                    fontWeight: '500',
                    fontFamily: 'Public Sans'
                  }
                }
              }
            },
            colors: [config.colors.primary],
            fill: {
              type: 'gradient',
              gradient: {
                shade: 'dark',
                shadeIntensity: 0.5,
                gradientToColors: [config.colors.primary],
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 0.6,
                stops: [30, 70, 100]
              }
            },
            stroke: {
              dashArray: 5
            },
            grid: {
              padding: {
                top: -35,
                bottom: -10
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
          series: [78],
          
        }
      }
  render() {
    return (
        <Chart options={this.state.options} series={this.state.series} type="radialBar" width={235} height={200.55}   />
    )
  }
}
