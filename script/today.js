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
    console.log(data)
    // infected - active
    document.getElementById('active-delta').innerText = data.todayCases
    document.getElementById('active-total').innerText = refactorNumbers(data.active)

    // deaths
    document.getElementById('deaths-delta').innerText = data.todayDeaths
    document.getElementById('deaths-total').innerText = refactorNumbers(data.deaths)

    // recovered
    document.getElementById('recovered-delta').innerText = data.todayRecovered
    document.getElementById('recovered-total').innerText = refactorNumbers(data.recovered)

    // total cases
    document.getElementById('cases-delta').innerText = data.todayCases
    document.getElementById('cases-total').innerText = refactorNumbers(data.cases)
}

refactorNumbers = (num) => {
    return m(num, 2)
}

// found here: https://stackoverflow.com/questions/9345136/1000000-to-1m-and-1000-to-1k-and-so-on-in-js
m = (n, d) => {
    x = ('' + n).length, p = Math.pow, d = p(10, d)
    x -= x % 3
    return Math.round(n * d / p(10, x)) / d + " kMGTPE"[x / 3]
}