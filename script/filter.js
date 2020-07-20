masterFilter = (color, type) => {
    const yesterday = 0
    const sort = "cases"
    const allowNull = 0

    const reqUrl = `${baseUrl}${todayPerCountriesEP}?yesterday=${yesterday}&sort=${sort}&allowNull=${allowNull}`

    return fetch(reqUrl, {
        method: 'GET'
    }).then((res) => {
        return res.json()
    }).then((data) => {
        buildCountryList(data, 0, type)
        buildCircles(data, 10, 15, 2, color, type)
    })
}