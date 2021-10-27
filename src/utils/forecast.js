const request = require('request')

const forecast = (longtitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=eb1d73066fbcc1b20b4a4fca52ddfe0c&query=' + latitude + ',' + longtitude

    request({ url, json: true}, (error, { body } = {} ) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const message =  body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degress out. It feels like ' + body.current.feelslike + ' degress out. '
                    + 'Wind speed is at ' + body.current.wind_speed + ' and wind degree is ' + body.current.wind_degree + '.'
            callback(undefined, message)
        }
    })
}

module.exports = forecast