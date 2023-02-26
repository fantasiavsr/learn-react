// Async Await pada JS

const getUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve("Rudi");
            reject("Something wrong...");
        }, 2000)
    })
}

const tryGetGame = async () => {
    try{
        let userName = await getUser();
        console.log(userName);
    }
    catch (error){
        console.log(error);
    }
};

console.log("Start...");
tryGetGame();
console.log("Finish");



