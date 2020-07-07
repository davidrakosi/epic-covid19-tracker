// pie chart

setUpPieChart = (data) => {
    // prepare data
    const chartData = [
        ['Category', 'Amount'],
        ['Active', data.active],
        ['Deaths', data.deaths],
        ['Recovered', data.recovered]
    ];

    drawPieChart(chartData)
}

// column chart

let columnChartData = []

setUpColumnChart = (data) => {
    let chartData = []

    chartData[0] = ['Date', 'Amount']

    let i = 1
    for (const [key, value] of Object.entries(data.cases)) {
        chartData[i] = [key, value]
        i++
    }

    drawLineChart(chartData)
}

