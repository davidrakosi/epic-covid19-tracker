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
