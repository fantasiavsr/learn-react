// forEach() dan map() pada array di JS

let arr = [10, 20, 30, 40];

/* arr.forEach(
    function(val, key){
        console.log(`Nilai array di index-${key} adalah ${val}`);
    }
); */

arr.forEach(
    (val, key) => console.log(`Nilai array di index-${key} adalah ${val}`)
);