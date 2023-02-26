// Promise pada JS

const getUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve("Rudi");
            reject("Something wrong...");
        }, 2000)
    })
}

console.log("Start...");    // Start...
getUser()
    .then((userName) => console.log(userName))
    .catch((error) => console.log(error));
console.log("Finish");      // Finish