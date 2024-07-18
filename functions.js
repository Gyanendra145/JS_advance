
function sayMyname(){
    console.log("G");
    console.log("y");
    console.log("a");
    console.log("n");
}
// sayMyname()
// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
// addTwoNumbers(3,4)

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    return number1 + number2
    // return result
}
const result = addTwoNumbers(4,8)
console.log("Result: ", result);


 function loginUserMessage(username="sam"){
    if (username === undefined){
        console.log("Please enter a user name");
        return
    }
    return `${username} just logged in`
 }
//  console.log(loginUserMessage("Hello Gyan"));
console.log(loginUserMessage("Gyan"));

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,500,4654,75));

const user = {
    username: "GYAN",
    prices: 600
}
function handleObject(anyobject){
    console.log(`Usernameis ${anyobject.username} and price is ${anyobject.prices}`);
}
// handleObject(user)
handleObject(user)
handleObject({
    username: "sam",
    prices:567
})
// const myNewArray = [200,300,400,500]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,100,400,500]));



