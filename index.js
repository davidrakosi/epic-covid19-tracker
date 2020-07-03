// define APIs
const baseUrl = "https://disease.sh"

const todayPerCountriesEP = "/v3/covid-19/countries"
const allTodayCasesEP = "/v3/covid-19/all"

// start 

window.onload = () => {
    initData()
}

initData = () => {
    displayCountryList(baseUrl, todayPerCountriesEP)
    displayDataOnMasterSelector(baseUrl, allTodayCasesEP)
}