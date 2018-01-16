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
