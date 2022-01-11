const zeroFill = n => {
    return ('0' + n).slice(-2);
}

function numbes_in_months() {
    var all_months = month()
    var list_month = ''
    switch (all_months) {
        case 0:
            list_month = 'Janeiro'
            break
        case 1:
            list_month = 'Fevereiro'
            break
        case 2:
            list_month = 'Março'
            break
        case 3:
            list_month = 'Abril'
            break
        case 4:
            list_month = 'Maio'
            break
        case 5:
            list_month = 'Junho'
            break
        case 6:
            list_month = 'Julho'
            break
        case 7:
            list_month = 'Agosto'
            break
        case 8:
            list_month = 'Setembro'
            break
        case 9:
            list_month = 'Outubro'
            break
        case 10:
            list_month = 'Novembro'
            break
        case 11:
            list_month = 'Dezembro'
            break
        default:
            list_month = undefined
            break
    }

    return list_month
}

function intance_date() {
    var dateObj = new Date()
    return dateObj
}

function date() {
    dateObj = intance_date()
    var date = dateObj.getDate()
    return date
}

function month() {
    dateObj = intance_date()
    var month = dateObj.getMonth()
    return month
}

function year() {
    dateObj = intance_date()
    var year = dateObj.getFullYear()
    return year
}

function hours() {
    dateObj = intance_date()
    var hours = dateObj.getHours()
    return hours
}

function minutes() {
    dateObj = intance_date()
    var minutes = dateObj.getMinutes()
    return minutes
}

function seconds() {
    dateObj = intance_date()
    var seconds = dateObj.getSeconds()
    return seconds
}

function result_date() {
    var result_date = document.getElementById('date')
    result_date.innerHTML = `Dia ${date()} de ${numbes_in_months()} de ${year()}`
    return result_date
}

function result_hours() {
    var result_hours = document.getElementById('hours')
    result_hours.innerHTML = `${zeroFill(hours())}:${zeroFill(minutes())}:${zeroFill(seconds())}`
    return result_hours
}

function author() {
    var author = document.getElementById('author')
    author.innerHTML = `&copy; Wesley`
    return author
}

function background_body() {
    var background = window.document.body
    background.style.background = 'black'
    background.style.transition = '2.5s'
    return background
}

var intervalor = setInterval(() => {
    result_date()
    result_hours()
    author()
    background_body()
}, 10)