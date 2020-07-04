// define APIs
const baseUrl = "https://disease.sh"

const allTodayCasesEP = "/v3/covid-19/all"
const todayPerCountriesEP = "/v3/covid-19/countries"

// start 

window.onload = () => {
    initData()
}

initData = () => {
    displayCountryList(baseUrl, todayPerCountriesEP)
    displayDataOnMasterSelector(baseUrl, allTodayCasesEP)
}

filterActive = () => {

}

filterDeaths = () => {

}

filterRecovered = () => {

}