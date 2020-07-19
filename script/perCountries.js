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

buildCountryList = (countriesData, filter) => {
    let html = ``
    let displayData = []
    let lat = 10
    let lng = 0

    if (filter) {
        countriesData.map((entry) => {
            const countryName = entry.country
            if (countryName.startsWith(filter)) {
                displayData.push(entry)
            }
        })
        lat = displayData[0].countryInfo.lat
        lng = displayData[0].countryInfo.long
    } else {
        displayData = countriesData
    }

    displayData.map((countryEntry) => {
        html += `
    <div class="country-container">
        <div class="flag-container">
            <div class="country-flag-container" style="background-image: url(${countryEntry.countryInfo.flag})"></div>
        </div>
        <div class="country-name-cases">
            <div class="country-name">${countryEntry.country}</div>
            <div class="country-total-cases">${addDecimals(countryEntry.active)}</div>
        </div>
    </div>
    `
    })
    document.getElementById('country-list').innerHTML = html
    buildCircles(countriesData, lat, lng, 4.5)
}