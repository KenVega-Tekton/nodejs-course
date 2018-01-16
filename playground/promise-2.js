const request = require("request");

let geocodeAddress = address => {
  let encodedAddress = encodeURIComponent(address);

  return new Promise((resolve, reject) => {
    request(
      {
        url: `https://maps.google.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
      },
      (error, response, body) => {
        if (error) {
          reject("Unable to connect to google servers");
        } else if (body.status === "ZERO_RESULTS") {
          reject("There is no results");
        } else if (body.status === "OK") {
          resolve({
            address: body.results[0].formatted_address,
            latitude: body.results[0].geometry.location.lat,
            longitude: body.results[0].geometry.location.lng
          });
        } else {
          reject("unknown error");
        }
      }
    );
  });
};

geocodeAddress("19456")
  .then(location => {
    console.log(JSON.stringify(location, undefined, 2));
  })
  .catch(error => {
    console.log(error);
  });
