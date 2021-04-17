var w = 3,
  z = 3;

function add(x, y) {
  var z = 2; //Local variable
  w = 2;
  console.log("==========");
  console.log(w, z);
  console.log("==========");
  return x + y;
}

const ans = add(2, 3);
// const, var, let

console.log(w, z);

console.log(ans);

if (true) {
  var a = 2; //Scope either global or functional
  let b = 3; //Scope is block wise
  const c = 4; //Scope is block wise
}

console.log("=============");
console.log(a);
console.log(b);
console.log(c);
