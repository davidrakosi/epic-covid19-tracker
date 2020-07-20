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
    const color = '#ee5b58'
    const type = 'active'
    masterFilter(color, type)
}

filterDeaths = () => {
    const color = '#757575'
    const type = 'deaths'
    masterFilter(color, type)
}

filterRecovered = () => {
    const color = '#5DC83E'
    const type = 'recovered'
    masterFilter(color, type)
}

filterCountries = (value) => {
    getTodaysDataPerCountry(baseUrl, todayPerCountriesEP, value)
}

hidePanel = () => {
    document.getElementById('main').style.width = '100%'
    document.getElementById('main').style.flexBasis = '100%'
    document.getElementById('side-panel').style.width = '0'
    document.getElementById('side-panel').style.flexBasis = '0'
    document.getElementById('showHideTrigger').innerHTML = '<div class="show-hide-button" onclick="showPanel()"><i class="fas fa-chevron-left"></i></div>'
}

showPanel = () => {
    document.getElementById('main').style.width = '65%'
    document.getElementById('main').style.flexBasis = '65%'
    document.getElementById('side-panel').style.width = '35%'
    document.getElementById('side-panel').style.flexBasis = '35%'
    document.getElementById('showHideTrigger').innerHTML = '<div class="show-hide-button" onclick="hidePanel()"><i class="fas fa-chevron-right"></i></div>'
}