google.charts.load('current', {
  packages: ['corechart', 'geochart'],
  mapsApiKey: 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY',
});
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
  var dataMap = google.visualization.arrayToDataTable([['Country', 'Popularity'], ['UA', 600], ['United States', 600], ['RU', 600], ['Australia', 600], ['Ethiopia', 600]]);

  var optionsMap = {
    legend: 'none',
    colorAxis: { colors: ['#FE5001'] },
  };

  var chartMap = new google.visualization.GeoChart(document.getElementById('geography-chart'));

  chartMap.draw(dataMap, optionsMap);
}

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['', 'посетителей'],
    ['', 190000],
    ['', 230000],
    ['', 210000],
    ['', 170000],
    ['', 330000],
    ['', 335000],
    ['', 350000],
    ['', 420000],
    ['', 360000],
    ['', 330000],
    ['', 400000],
    ['', 430000],
    ['', 510000],
    ['', 500000],
    ['', 550000],
  ]);

  var options = {
    legend: 'none',
    series: {
      0: { color: '#FE5001', targetAxisIndex: 0 },
    },

    lineWidth: 4,
    chartArea: { width: '80%', height: '70%' },
    vAxis: {
      format: 'short',

      textStyle: {
        color: '#727C8F',
        fontSize: 13,
        fontName: 'Gilroy',
      },
    },
    hAxis: {
      textStyle: {
        color: '#727C8F',
        fontSize: 13,
        fontName: 'Gilroy',
      },
    },
    tooltip: { isHtml: true },

    // height: 400,
  };

  var chart = new google.visualization.LineChart(document.getElementById('attendance-chart'));

  chart.draw(data, options);
}
