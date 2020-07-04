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
        // distributing data
        console.log(data)
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
        // buildCountryList(data)
        // buildCircles(data)
        console.log('per country data fetched')
    })
}