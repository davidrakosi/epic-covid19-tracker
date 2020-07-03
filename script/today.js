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

numbersFriendlyFormat = (num) => {
    return m(num, 2)
}

addDecimals=(num)=>{
    return eArabic(num)
}

// found here: https://stackoverflow.com/questions/9345136/1000000-to-1m-and-1000-to-1k-and-so-on-in-js
m = (n, d) => {
    x = ('' + n).length, p = Math.pow, d = p(10, d)
    x -= x % 3
    return Math.round(n * d / p(10, x)) / d + " kMGTPE"[x / 3]
}

// found here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
eArabic = (x) => {
    return x.toLocaleString('en-US');
}
