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
const shadeColor = config.colors.shadeColor;


export default class Incomechart extends Component {

    
 
    constructor(props) {
        super(props);
    
        this.state = {
          options: {
            chart: {
              height: 215,
              parentHeightOffset: 0,
              parentWidthOffset: 0,
              toolbar: {
                show: false
              },
              type: 'area'
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              width: 2,
              curve: 'smooth'
            },
            legend: {
              show: false
            },
            markers: {
              size: 6,
              colors: 'transparent',
              strokeColors: 'transparent',
              strokeWidth: 4,
              discrete: [
                {
                  fillColor: config.colors.white,
                  seriesIndex: 0,
                  dataPointIndex: 7,
                  strokeColor: config.colors.primary,
                  strokeWidth: 2,
                  size: 6,
                  radius: 8
                }
              ],
              hover: {
                size: 7
              }
            },
            colors: [config.colors.primary],
            fill: {
              type: 'gradient',
              gradient: {
                shade: shadeColor,
                shadeIntensity: 0.6,
                opacityFrom: 0.5,
                opacityTo: 0.25,
                stops: [0, 95, 100]
              }
            },
            grid: {
              borderColor: borderColor,
              strokeDashArray: 3,
              padding: {
                top: -20,
                bottom: -8,
                left: -10,
                right: 8
              }
            },
            xaxis: {
              categories: ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
              axisBorder: {
                show: false
              },
              axisTicks: {
                show: false
              },
              labels: {
                show: true,
                style: {
                  fontSize: '13px',
                  colors: axisColor
                }
              }
            },
            yaxis: {
              labels: {
                show: false
              },
              min: 10,
              max: 50,
              tickAmount: 4
            }
          },
          series: [
            {
              data: [24, 21, 30, 22, 42, 26, 35, 29]
            }
          ]
        }
      }
  render() {
    return (
        <Chart options={this.state.options} series={this.state.series} type="line" width={339} height={215} />
    )
  }
}
