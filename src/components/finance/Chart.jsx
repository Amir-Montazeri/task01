import React from 'react';
import Highcharts from 'highcharts';
import HighchartsBoost from 'highcharts/modules/boost';
HighchartsBoost(Highcharts);

export default function Chart() {
  const url = 'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/usdeur.json';
  React.useEffect(() => {
    Highcharts.chart({
      chart: {
        zoomType: 'x',
        renderTo: 'chart',
        backgroundColor: 'transparent',
        height: '300px',
        plotBackgroundColor: '#00000016',
        events: {
          load: function () {
            const chart = this
            window.fetch(url).then((res) => res.json()).then(json => {
              chart.update({ series: [{ ...this.series, data: json }] })
            })
          }
        }
      },
      title: {
        text: 'USD to EUR exchange rate over time',
        style: {
          color: '#fff'
        }
      },
      subtitle: {
        text: document.ontouchstart === undefined ?
          'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in',
        style: {
          color: '#ffffffa6'
        }
      },
      xAxis: {
        type: 'datetime'
      },
      yAxis: {
        title: {
          text: 'Exchange rate'
        }
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        area: {
          fillColor: {
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1
            },
            stops: [
              [0, Highcharts.getOptions().colors[0]],
              [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
            ]
          },
          marker: {
            radius: 2
          },
          lineWidth: 1,
          states: {
            hover: {
              lineWidth: 1
            }
          },
          threshold: null
        }
      },
      series: [{
        type: 'area',
        name: 'Custom Content'
      }]
    })
  }, []);

  return (
    <div id='chart'></div>
  );
};