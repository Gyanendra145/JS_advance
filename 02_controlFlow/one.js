// if
// if (true) {
    
    
// }

const isUserloggedIn = true
const temperature = 41

if (temperature === 41) {
    console.log("less than 50");
} else{
    console.log("temperature is greater tha 50");
}

console.log("execute");
// <,>, <= , == , ===, !==

const score = 200

if(score>100){
   var power = "fly"
    console.log(`user power: ${power}`);
}
console.log(`user power: ${power}`);

const balance = 1000

if (balance<500) {
    console.log("less than 500");
} else if(balance < 750){
    console.log("less than 750");
} else if(balance < 1200
){
    
    console.log("less than 1200");
}

const userLoggedIn = true
const debitCard = true

const userLoggedInFromGoogle = false
const loggedInfromEmail = true


if (userLoggedIn && debitCard && 2==2) {
    console.log("Allow to buy course");
}

if (userLoggedInFromGoogle || loggedInfromEmail) {
    console.log("user logged In");
}