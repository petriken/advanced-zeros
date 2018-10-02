module.exports = function getZerosCount(number, base) {
  // your implementation
  let a = number;
  let b = base;

function getSimpleMn(x) {
    let arr = [];

    for (let i = 2; i <= x; i++) {
        while (x % i == 0 && x > 1) {
            arr.push(i);
            x = x / i;
        }
        if (x / i == 1) {
            arr.push(x);
        }
    }
    g = Math.max.apply(null, arr);
    return (g);
}

let res = 0;
while (a) {
    a = a / getSimpleMn(b) | 0; // base
    res += a;
}
return res;
}