// Asyncronous pada JS

const getUser = () => {
    setTimeout(() => {
        console.log("Processing done!");
        return "Rudi";
    }, 2000)
}

console.log("Start...");    // Start...
console.log(getUser());     // undefined
console.log("Finish");      // Finish