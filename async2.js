const func1 = () => {
  return new Promise((resolve, reject) => {
    try {
      resolve(1);
    } catch {
      reject("Error");
    }
  });
};

const func2 = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve(2);
    } else {
      reject("Error");
    }
  });
};

const th_func = () => {
  func1()
    .then((output1) => {
      func2()
        .then((output2) => {
          console.log(output1 + output2);
        })
        .catch((error2) => {
          console.log(error2);
        });
    })
    .catch((error) => {
      console.log(error);
    });
};

const as_func = async () => {
  try {
    const output1 = await func1();
    const output2 = await func2();
    console.log(output1 + output2);
  } catch (error) {
    console.log(error);
  }
};

// th_func();
as_func();
console.log("This is the last line");
