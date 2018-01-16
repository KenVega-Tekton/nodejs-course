const request = require("request");
const key = require("../config/api");

let getWeather = (lng, lat, callback) => {
  request(
    {
      url: `https://api.darksky.net/forecast/${key.apiKey}/${lng},${lat}`,
      json: true
    },
    (error, response, body) => {
      if (!error && response.statusCode === 200) {
        callback(null, {
          temperature: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature
        });
      } else {
        callback(`Unable to fetch weather`);
      }
    }
  );
};

module.exports.getWeather = getWeather;
