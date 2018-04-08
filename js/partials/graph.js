// Chart 1
Highcharts.chart('chart1', {
    chart: {
        type: 'column',
        backgroundColor: 'transparent'
    },
    title: {
        text: ''
    },
    xAxis: {
        labels: {
            style: {
                color: '#000000',
                fontWeight: 'bold',
                fontSize: '14px',
                fontFamily: 'Helvetica'
            }
        },
        categories: ['2016', '2017', '2018']
    },
    yAxis: {
        min: 0,
        max: 100,
        tickInterval: 50,
        labels: {
            style: {
                color: '#000000',
                fontWeight: 0,
                fontSize: '12px',
                fontFamily: 'Helvetica'
            },
            formatter: function() {
                return this.value + ' %';
            }
        },
        title: {
            text: ''
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
            }
        }
    },
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        enabled: false,
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
        series: {
            groupPadding: 0,
            dataLabels: {
              enabled: true,
              style: {
                textShadow: false,
                textOutline: false
              }
            }
        },
        column: {
            stacking: 'normal',
            dataLabels: {
                style: {
                    fontWeight: 0,
                    fontSize: '12px',
                    fontFamily: 'Helvetica'
                },
                format: '{y} %',
                enabled: true,
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
            }
        }
    },
    series: [{
        name: '1',
        color: '#617fbd',
        data: [30, 27, 25]
    }, {
        name: '2',
        color: '#405e9e',
        data: [60, 55, 50]
    }, {
        name: '3',
        color: '#2b4989',
        data: [10, 18, 25]
    }]
});

// Chart 2
Highcharts.chart('chart2', {

    chart: {
        type: 'columnrange',
        inverted: true,
        backgroundColor: 'transparent',
    },

    title: {
        text: ''
    },

    subtitle: {
        text: ''
    },

    xAxis: {
        lineWidth: 0,
        minorGridLineWidth: 0,
        lineColor: 'transparent',
        minorTickLength: 0,
        tickLength: 0,
        labels: {
            style: {
                fontFamily: 'Helvetica',
                fontWeight: 'normal',
                fontSize: '16px',
                color: '#000000',
            }
        },
        categories: ['1', '2', '3', '4', '5', '6',
            '7', '8']
    },

    yAxis: {
        visible: false,
        labels: {
            enabled: false
        },
        title: {
                text: ''
        },
    },

    tooltip: {
        enabled: false
    },

    plotOptions: {
        columnrange: {
            colorByPoint: true,
            colors: ['#2b4989', '#2b4989', '#2b4989', '#2b4989', '#2b4989', '#2b4989', '#2b4989', '#d2d2d2'],
            dataLabels: {
                enabled: true,
                formatter:function(){
                    if(this.y != 0)
                        return this.y;
                }
            }
        },
        series: {
            groupPadding: 0,
            pointWidth:20,
            dataLabels: {
                inside: false,
                enabled: true,
                style: {
                    textShadow: false,
                    textOutline: false,
                    fontWeight: 'normal',
                    fontFamily: 'Helvetica',
                    fontSize: '14px'
              }
            }
        }
    },

    legend: {
        enabled: false
    },

    series: [{
        name: '',
        color: '#2b4989',
        data: [
            [24.2, 0],
            [13.4, 0],
            [10.4, 0],
            [4.6, 0],
            [4.1, 0],
            [4.0, 0],
            [3.3, 0],
            [2.1, 0]
        ]
    }]
});

// Chart 3
Highcharts.chart('chart3', {

    chart: {
        type: 'columnrange',
        inverted: true,
        backgroundColor: 'transparent',
    },

    title: {
        text: ''
    },

    subtitle: {
        text: ''
    },

    xAxis: {
        visible: false,
        labels: {
            enabled: false,
            style: {
                fontFamily: 'Helvetica',
                fontWeight: 'normal',
                fontSize: '16px',
                color: '#000000'
            }
        },
        categories: ['1', '2', '3', '4', '5', '6',
            '7', '8']
    },

    yAxis: {
        visible: false,
        labels: {
            enabled: false
        },
        title: {
                text: ''
        },
    },

    tooltip: {
        enabled: false
    },

    plotOptions: {
        columnrange: {
            colorByPoint: true,
            colors: ['#2b4989', '#2b4989', '#2b4989', '#2b4989', '#2b4989', '#2b4989', '#2b4989', '#d2d2d2'],
            dataLabels: {
                enabled: true,
                formatter:function(){
                    if(this.y != 0)
                        return this.y;
                }
            }
        },
        series: {
            groupPadding: 0,
            pointWidth:20,
            dataLabels: {
                inside: false,
                enabled: true,
                style: {
                    textShadow: false,
                    textOutline: false,
                    fontWeight: 'normal',
                    fontFamily: 'Helvetica',
                    fontSize: '14px'
              }
            }
        }
    },

    legend: {
        enabled: false
    },

    series: [{
        name: '',
        color: '#2b4989',
        data: [
            [1.5, 0],
            [0, -0.5],
            [0.2, 0],
            [0, -0.7],
            [0, 0],
            [0.9, 0],
            [1.2, 0],
            [0, -0.2]
        ]
    }]
});




