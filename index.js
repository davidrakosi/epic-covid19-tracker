// define APIs
const baseUrl = "https://disease.sh"

const allTodayCasesEP = "/v3/covid-19/all"
const todayPerCountriesEP = "/v3/covid-19/countries"
const historicalWorldWideEP = "/v3/covid-19/historical/all"

// start 

window.onload = () => {
    initData()
}

initData = () => {
    getTodaysDataPerCountry(baseUrl, todayPerCountriesEP)
    getTodaysData(baseUrl, allTodayCasesEP)
    getHistoricalWorldwideData(baseUrl, historicalWorldWideEP)

    // displayCountryList(baseUrl, todayPerCountriesEP)
    // displayDataOnMasterSelector(baseUrl, allTodayCasesEP)
}

filterActive = () => {

}

filterDeaths = () => {

}

filterRecovered = () => {

}

filterCountries = (value) => {
    // let searchValue = document.getElementById('search-input-box').value
    getTodaysDataPerCountry(baseUrl, todayPerCountriesEP, value)
    console.log(value)
}