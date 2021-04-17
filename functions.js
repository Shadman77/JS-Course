// Normal function
function add(x, y) {
  return x + y;
}

// function subs(x, y) {
//   return x - y;
// }

// Arrow function with a callback
var subs = (x, y, callback) => {
  const ans = x - y;
  callback(ans);
};

const display = (res) => {
  console.log(res);
};

//line subs function started, 12, callback function started, call function completed, subs function completed

console.log(add(2, 3));
console.log("===========");
subs(2, 3, display);

console.log("===========");
console.log()


console.log("===========");
subs(3, 2, function (x) {
  if (x < 0) {
    console.log("X is negative");
  } else {
    console.log("X is positive");
  }
});
console.log("===========");

subs = 2;
console.log(subs);
console.log(subs(2, 3));
