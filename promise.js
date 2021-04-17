let promise = new Promise(function (resolve, reject) {
  if (false) {
    resolve("Done");
  } else {
    reject("Error");
  }
});

promise
  .then((output) => {
    console.log("then");
    console.log(output);
  })
  .catch((error) => {
    console.log("catch");
    console.log(error);
  });

console.log("Last line");
