import Highcharts from 'highcharts';

const url = 'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/usdeur.json';

export default function(currency) {
  return (
  {
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
    text: `${currency} selected currency\'s Chart`,
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
      text: ''
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
  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        legend: {
          enabled: false
        }
      },
      yAxis: {
        title: {
          text: ''
        }
      }
    }]
  },
  series: [{
    type: 'area',
    name: 'Custom Content'
  }]
  }
  )
};