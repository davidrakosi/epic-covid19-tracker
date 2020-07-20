numbersFriendlyFormat = (num) => {
    return m(num, 2)
}

// found here: https://stackoverflow.com/questions/9345136/1000000-to-1m-and-1000-to-1k-and-so-on-in-js
m = (n, d) => {
    x = ('' + n).length, p = Math.pow, d = p(10, d)
    x -= x % 3
    return Math.round(n * d / p(10, x)) / d + " kMGTPE"[x / 3]
}

//######################################################################################################

addDecimals = (num) => {
    return eArabic(num)
}

// found here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
eArabic = (x) => {
    return x.toLocaleString('en-US');
}

//######################################################################################################

// found here: https://developers.google.com/chart/interactive/docs/gallery/piechart
drawPieChart = (chartData) => {
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

        var data = google.visualization.arrayToDataTable(chartData);

        var options = {
            title: 'COVID-19 Status',
            titleTextStyle: {
                fontSize: 20
            },
            titleColor: '#fff',
            backgroundColor: '#282A2F',
            pieHole: 0.4,
            legend: {
                position: 'bottom',
                textStyle: {
                    color: '#fff'
                }
            },
            chartArea: {
                left: 20,
                top: 70,
                width: '100%',
                height: '65%'
            },
            colors: [
                '#ee5b58',
                '#757575',
                '#5DC83E'
            ]
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
    }
}

// found here: https://stackoverflow.com/questions/38397894/get-json-key-name/38397927
refactorData = (entry) => {
    // let obj = { "success": "You are welcome" };
    let keys = Object.keys(entry);
    console.log(keys[0]);
    return keys[0]
}

// found here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
objectElementDestructor = (obj) => {
    for (const [key, value] of Object.entries(obj)) {
        console.log(`${key} && ${value}`);
    }
}

// found here: https://developers.google.com/chart/interactive/docs/gallery/linechart
drawLineChart = (chartData) => {
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable(chartData);

        var options = {
            title: 'COVID-19 Cases in the Past Month',
            titleColor: '#fff',
            titleTextStyle: {
                fontSize: 20
            },
            curveType: 'function',
            legend: {
                position: 'none'
            },
            backgroundColor: '#282A2F',
            hAxis: {
                title: 'Time',
                titleTextStyle: {
                    color: '#ffffff'
                },
                textColor: '#ffffff'
            },
            vAxis: {
                title: 'Deaths / Recovered / Cases',
                titleTextStyle: {
                    color: '#ffffff'
                },
                format: 'short',
                textColor: '#ffffff',
                gridlines: {
                    color: '#fff',
                    minSpacing: 20
                }
            },
            lineWidth: 10,
            chartArea: {
                left: 100,
                top: 70,
                width: '85%',
                height: '75%'
            },
            colors: [
                '#ee5b58',
                '#757575',
                '#5DC83E'
            ]
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
    }
}