// entry

// displayCountryList = (baseUrl, apiUrl) => {
//     getTodaysDataPerCountries(baseUrl, apiUrl)
// }

// getTodaysDataPerCountries = (baseUrl, endpoint) => {
//     // params 
//     const yesterday = 0
//     const sort = "cases"
//     const allowNull = 0

//     const reqUrl = `${baseUrl}${endpoint}?yesterday=${yesterday}&sort=${sort}&allowNull=${allowNull}`

//     return fetch(reqUrl, {
//         method: 'GET'
//     }).then((res) => {
//         return res.json()
//     }).then((data) => {
//         buildCountryList(data)
//         buildCircles(data)
//     })
// }

buildCountryList = (countriesData, filter, type) => {
    let html = ``
    let displayData = []
    let lat = 10
    let lng = 15

    if (filter && filter != 0) {
        countriesData.map((entry) => {
            const countryName = entry.country
            if (countryName.startsWith(filter)) {
                displayData.push(entry)
            }
        })
        lat = displayData[0].countryInfo.lat
        lng = displayData[0].countryInfo.long
        setUpPieChart(displayData[0])
    } else {
        displayData = countriesData
    }

    displayData.map((countryEntry) => {
        let countryDelta
        let countryTotal
        let color

        if (type) {
            switch (type) {
                case 'active':
                    countryDelta = addDecimals(countryEntry.todayCases)
                    countryTotal = numbersFriendlyFormat(countryEntry.active)
                    color = '#ee5b58'
                    break;
                case 'deaths':
                    countryDelta = addDecimals(countryEntry.todayDeaths)
                    countryTotal = numbersFriendlyFormat(countryEntry.deaths)
                    color = '#757575'
                    break;
                case 'recovered':
                    countryDelta = addDecimals(countryEntry.todayRecovered)
                    countryTotal = numbersFriendlyFormat(countryEntry.recovered)
                    color = '#5DC83E'
                    break;
                default:
                    countryDelta = addDecimals(countryEntry.todayCases)
                    countryTotal = numbersFriendlyFormat(countryEntry.cases)
                    color = '#9945D7'
                    break;
            }
        } else {
            countryDelta = addDecimals(countryEntry.todayCases)
            countryTotal = numbersFriendlyFormat(countryEntry.cases)
            color = '#9945D7'
        }

        html += `
        <div class="country-container" onclick="filterCountries('${countryEntry.country}')">
            <div class="flag-container">
                <div class="country-flag-container" style="background-image: url(${countryEntry.countryInfo.flag})"></div>
            </div>
            <div class="country-name-cases">
                <div class="country-name">${countryEntry.country}</div>
                <div class="country-total-cases">${countryTotal}</div>
            </div>
            <div class="country-today-delta" id="countryDelta">
                <div class='legend-item' style='color: #ee5b58'>${numbersFriendlyFormat(countryEntry.active)}</div>
                <div class='legend-item' style='color: #757575'>${numbersFriendlyFormat(countryEntry.deaths)}</div>
                <div class='legend-item' style='color: #5DC83E'>${numbersFriendlyFormat(countryEntry.recovered)}</div>
            </div>
        </div>
    `
    })
    document.getElementById('country-list').innerHTML = html
    buildCircles(countriesData, lat, lng, 4.5)
}
