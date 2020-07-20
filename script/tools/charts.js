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

    chartData[0] = ['Date', 'Active', 'Deaths', 'Recovered']

    let i = 1
    for (const [key, value] of Object.entries(data.cases)) {
        chartData[i] = [key, value]
        i++
    }

    let j = 1
    for (const [key, value] of Object.entries(data.deaths)) {
        chartData[j].push(value)
        j++
    }

    let k = 1
    for (const [key, value] of Object.entries(data.recovered)) {
        chartData[k].push(value)
        k++
    }

    console.log(chartData)

    drawLineChart(chartData)
}

