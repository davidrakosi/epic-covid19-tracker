getTodaysData = (baseUrl, endpoint) => {
    // params
    const yesterday = 0
    const allowNull = 0

    const reqUrl = `${baseUrl}${endpoint}?yesterday=${yesterday}&allowNull=${allowNull}`

    return fetch(reqUrl, {
        method: 'GET'
    }).then((res) => {
        return res.json()
    }).then((data) => {
        setUpNavButtons(data)
        setUpPieChart(data)
    })
}

getTodaysDataPerCountry = (baseUrl, endpoint) => {
    // params 
    const yesterday = 0
    const sort = "cases"
    const allowNull = 0

    const reqUrl = `${baseUrl}${endpoint}?yesterday=${yesterday}&sort=${sort}&allowNull=${allowNull}`

    return fetch(reqUrl, {
        method: 'GET'
    }).then((res) => {
        return res.json()
    }).then((data) => {
        buildCountryList(data)
        buildCircles(data)
    })
}

getHistoricalWorldwideData = (baseUrl, endpoint) => {
    //params
    const lastdays = 30

    const reqUrl = `${baseUrl}${endpoint}?lastdays=${lastdays}`

    return fetch(reqUrl,{
        method:'GET'
    }).then((res)=>{
        return res.json()
    }).then((data)=>{
        setUpColumnChart(data)
    })
}