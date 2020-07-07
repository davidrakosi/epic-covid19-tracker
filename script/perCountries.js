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

buildCountryList = (countriesData) => {
    let html = ``


    countriesData.map((countryEntry) => {
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
}