Highcharts.chart('container', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Pineapples', 'Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
      title: {
        text: 'Items of fruit that were eaten last week in Maia and Amanda\'s house'
      }
    },
    series: [{
      name: 'Maia',
      data: [6, 1, 0, 4]
    }, {
      name: 'Amanda',
      data: [6, 5, 7, 3]
    }]
  });
