var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === "number" && typeof b === "number") {
        resolve(a + b);
      } else {
        reject("arguments must be numbers");
      }
    }, 1000);
  });
};

asyncAdd(13, 7)
  .then(response => {
    console.log("Result : ", response);
    return asyncAdd(response, 33)
      .then(res => {
        console.log("Result : ", res);
      })
      .catch(error => {
        console.log(error);
      });
  })
  .catch(error => {
    console.log(error);
  });

console.log("hola");

/*
let somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hey it worked");
    //reject("Unable to fulfill the promise");
  }, 2000);
});

somePromise
  .then(message => {
    console.log("success: ", message);
  })
  .catch(error => {
    console.log("failure: ", error);
  }); // then no va a ser llamado hasta que la promesa se resuelva
*/
