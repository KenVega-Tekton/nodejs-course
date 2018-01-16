const yargs = require("yargs");
const axios = require("axios");
const key = require("./config/api");

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
  .alias("help", "h").argv; //v3gf3

let encodedAddress = encodeURIComponent(argv.address);
let geocodeUrl = `https://maps.google.com/maps/api/geocode/json?address=${encodedAddress}`;

axios
  .get(geocodeUrl)
  .then(res => {
    if (res.data.status === "ZERO_RESULTS") {
      throw new Error("unable to find that address.");
    }

    //console.log("resulsts");
    //console.log(res.data.results);

    let lat = res.data.results[0].geometry.location.lat,
      lng = res.data.results[0].geometry.location.lng;

    let weatherURL = `https://api.darksky.net/forecast/${
      key.apiKey
    }/${lng},${lat}`;

    console.log(res.data.results[0].formatted_address);

    return axios
      .get(weatherURL)
      .then(resWeather => {
        let temp = resWeather.data.currently.temperature;
        let apparentTemp = resWeather.data.currently.apparentTemperature;
        console.log(`temp : ${temp}. apparentTemp : ${apparentTemp}`);
      })
      .catch();
  })
  .catch(error => {
    //console.log(error);
    if (error.code === "ENOTFOUND") {
      console.log("unable to connect to API servers");
    } else if (error.code === "ECONNREFUSED") {
      console.log("connection refused");
    } else {
      console.log(error.message);
    }
  });
