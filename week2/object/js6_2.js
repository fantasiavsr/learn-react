// forEach() dan map() pada array di JS

let arr = [10, 20, 30, 40];
arrKuadrat = [];

/* arr.forEach(
    (val, key) => arrKuadrat.push(val * val)
); */

arr.map(
    (val) => arrKuadrat.push(val * val)
);

console.log(arrKuadrat);