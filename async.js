const func = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve("Done");
    } else {
      reject("Error");
    }
  });
};

// func()
//   .then((output) => {
//     console.log("then");
//     console.log(output);
//   })
//   .catch((error) => {
//     console.log("catch");
//     console.log(error);
//   });

const as_func = async () => {
  try {
    const result = await func();
    console.log("Try");
    console.log(result);
  } catch (error) {
    console.log("Catch");
    console.log(error);
  }
  console.log("last line of the function");
};

as_func();
console.log("last line");
