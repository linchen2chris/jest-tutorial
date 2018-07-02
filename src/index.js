import rect from "./rect";
import sum from "./sum";

let a = sum(3, 4);
console.log("a = ", a);

const callback = (err, method) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("area is ", method.area());
  }
};
rect(4, 5, callback);
console.log("after");
rect(2, 3, callback);
console.log("after");
rect(0, 5, callback);
console.log("after");
rect(-1, 5, callback);
console.log("after");
