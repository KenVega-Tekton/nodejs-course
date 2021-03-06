const yargs = require("yargs");
const geocode = require("./geocode/geocode"); // to get longitude and latitude
const weather = require("./weather/weather"); // to get the temperature

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: "address",
      describe: "Address to fetch weather for",
      string: true
    }
  })
  .help()
  .alias("help", "h").argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    //console.log(JSON.stringify(results, undefined, 2));
    //console.log(results);

    weather.getWeather(
      results.latitude,
      results.longitude,
      (errorMessage, weatherResults) => {
        if (errorMessage) {
          console.log(errorMessage);
        } else {
          console.log(
            `It's currently ${weatherResults.temperature} in ${
              results.address
            }. But it feels like ${weatherResults.apparentTemperature} today.`
          );
        }
      }
    );
  }
});
