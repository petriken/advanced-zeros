module.exports = function getZerosCount(number, base) {
  // your implementation
  let a = number;
  let b = base;

  function getSimpleMn(x) {
    let arr = [];

    for (let i = 2; i <= x; i++) { //разложение на простые множители в массив
        while (x % i == 0) {
            arr.push(i);
            x = x / i;
        }
    }

    let maxFact = (Math.max.apply(null, arr)); // больший множитель

    let count = 0;                       //считаем степень макс. множителя
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i] == maxFact)
            count++;
    }
    let fact = [maxFact, count];
    return fact;
}

let res = 0;                  //считаем нули
while (a) {
    a = Math.floor(a / getSimpleMn(b)[0]); 
    res += a / getSimpleMn(b)[1];
}
return (Math.floor(res));
}