Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Median Household Income (By County)'
    },
    subtitle: {
        text: 'Source: ' +
            '<a href="https://www.flhealthcharts.gov/ChartsReports/rdPage.aspx?rdReport=NonVitalIndRateOnly.DataViewer&cid=293" ' +
            'target="_blank">FLHealthCharts</a>'
    },
    xAxis: {
        categories: [
            '2016',
            '2017',
            '2018',
            '2019',
            '2020',
        ],
        crosshair: true
    },
    yAxis: {
        title: {
            useHTML: true,
            text: 'Amount in Thousands (of USD)'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Alachua',
        data: [44.702, 45.478, 49.078, 49.689, 50.089]

    }, {
        name: 'Bay',
        data: [48.577, 50.283, 51.829, 54.316, 56.483]

    }, {
        name: 'Citrus',
        data: [39.054, 40.574, 41.424, 44.237, 45.6897]

    }, {
        name: 'Clay',
        data: [59.179, 61.971, 62.653, 65.740, 68.657]

    }, {
        name: 'Flagler',
        data: [48.898, 51.049, 53.872, 54.514, 57.536]

    }, {
        name: 'Hernando',
        data: [42.274, 44.324, 46.030, 48.812, 50.280]

    }, {
        name: 'Leon',
        data: [48.248, 49.941, 51.201, 53.106, 54.675]

    }, {
        name: 'Nassau',
        data: [59.196, 64.294, 66.297, 69.943, 72.998]

    }, {
        name: 'St. Johns',
        data: [69.523, 73.640, 77.323, 82.252, 83.803]

    },  {
        name: 'Sumter',
        data: [52.594, 54.771, 55.228, 57.226, 59.618]

    }]
});
Highcharts.chart('container2', {

    title: {
        text: 'Individuals Below Poverty Level (By County)'
    },

    subtitle: {
        text: 'Source: <a href="https://www.flhealthcharts.gov/ChartsReports/rdPage.aspx?rdReport=NonVitalInd.DataViewer&cid=294" target="_blank">FLHealthCharts</a>'
    },

    yAxis: {
        title: {
            text: 'Percent of Individuals Below Poverty Level'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2016 to 2020'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2016
        }
    },

    series: [{
        name: 'Alachua',
        data: [24.2,	23.3,	21.8,	21.4,	20.7]
    }, {
        name: 'Bay',
        data: [15.6, 15.4, 14.7,	14.6,	13]
    }, {
        name: 'Citrus',
        data: [17.7,	17.4,	16.7,	15.7,	15]
    },{
        name: 'Clay',
        data: [10.2,	10.4,	10.6,	10.2,	9.5]
    },{
        name: 'Flagler',
        data: [13.2,	13.3,	11.9,	12.4,	11]
    },{
        name: 'Hernando',
        data: [15.6,	14.3,	14.3,	14.1,	14.4]
    },{
        name: 'Leon',
        data: [21.3,	20.5,	20.4,	20.5,	19.6]
    }, {
        name: 'Nassau',
        data: [12.7,	11.4,	10.2,	10.5,	9.8]
    }, {
        name: 'St. Johns',
        data: [9,	9.1,	8.4,	8.2,	7.7]
    }, {
        name: 'Sumter',
        data: [9.9,	9.2,	8.8,	8.2,	8.8]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});
