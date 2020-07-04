// entry
displayDataOnMasterSelector = (baseUrl, apiUrl) => {
    getTodaysData(baseUrl, apiUrl)
}

getTodaysData = (baseUrl, endpoint) => {
    // params
    const yesterday = 0
    const allowNull = 0

    const reqUrl = `${baseUrl}${endpoint}?yesterday=${yesterday}&allowNull=${allowNull}`

    fetch(reqUrl, {
        method: 'GET'
    }).then((res) => {
        return res.json()
    }).then((data) => {
        setUpNavButtons(data)
        setUpChart()
    })
}

setUpNavButtons = (data) => {
    // infected - active
    document.getElementById('active-delta').innerText = addDecimals(data.todayCases)
    document.getElementById('active-total').innerText = numbersFriendlyFormat(data.active)

    // deaths
    document.getElementById('deaths-delta').innerText = addDecimals(data.todayDeaths)
    document.getElementById('deaths-total').innerText = numbersFriendlyFormat(data.deaths)

    // recovered
    document.getElementById('recovered-delta').innerText = addDecimals(data.todayRecovered)
    document.getElementById('recovered-total').innerText = numbersFriendlyFormat(data.recovered)

    // total cases
    document.getElementById('cases-delta').innerText = addDecimals(data.todayCases)
    document.getElementById('cases-total').innerText = numbersFriendlyFormat(data.cases)
}

setUpChart = () => {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}