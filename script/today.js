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
        this.setUpNavButtons(data)
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