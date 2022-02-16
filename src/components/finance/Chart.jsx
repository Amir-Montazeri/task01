import React from 'react';
import Highcharts from 'highcharts';
import HighchartsBoost from 'highcharts/modules/boost';
import settings from './chartSettings';
HighchartsBoost(Highcharts);

export default function Chart() {
  React.useEffect(() => {
    Highcharts.chart(settings)
  }, []);

  return (
    <div id='chart'></div>
  );
};