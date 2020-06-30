// Add this to initMap()
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };

        console.log(pos)
        console.log(pos.lat)
        console.log(pos.lng)

        // console.log('overriding position')
        // pos.lat=49.2780
        // pos.lng=-123.1229
        // console.log(pos.lat)
        // console.log(pos.lng)
        // console.log('position overriden successfully')

        const apiUrl = `https://location-to-address.p.rapidapi.com/v1/geocode/reverse?limit=1&lang=en&lat=${pos.lat}&lon=${pos.lng}`
        console.log(apiUrl)

        const reverseGeoCode = () => {
            fetch(apiUrl, {
                method: "GET",
                headers: {
                    "x-rapidapi-host": "location-to-address.p.rapidapi.com",
                    "x-rapidapi-key": "APIKEY"
                }
            }).then((res) => {
                return res.json()
            }).then((data) => {
                console.log(data)
                getCityFinally(data)
            })
        }

        reverseGeoCode()

        const getCityFinally = (data) => {
            const retrievedCity = data.features[0].properties.city
            const retrievedCountry = data.features[0].properties.country
            console.log(retrievedCity)
            console.log(retrievedCountry)

            if (data.features[0].properties.state) {
                const retrivedState = data.features[0].properties.state
                console.log(retrivedState)
                buildAddressDataWithState(retrievedCity, retrievedCountry, retrivedState)
            }

            buildAddressData(retrievedCity, retrievedCountry)
        }

        const buildAddressDataWithState = (retrievedCity, retrievedCountry, retrivedState) => {
            var addressData = {
                city: retrievedCity,
                country: retrievedCountry,
                state: retrivedState
            }
            console.log(addressData)
        }

        const buildAddressData = (retrievedCity, retrievedCountry) => {
            var addressData = {
                city: retrievedCity,
                country: retrievedCountry
            }
            console.log(addressData)
        }

        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        infoWindow.open(map);
        map.setCenter(pos);
    }, function () {
        handleLocationError(true, infoWindow, map.getCenter());
    });
} else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
}