console.log("starting app");

setTimeout(() => {
  console.log("inside a callback");
}, 2000);

setTimeout(() => {
  console.log("inside a second callback");
}, 0);

console.log("finishing up");
