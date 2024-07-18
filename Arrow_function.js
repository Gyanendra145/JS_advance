 const user= {
    username: "GYANSINGH",
    price: 9999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to this website`); //this keyword is used to print current context
        console.log(this);
    }

 }
  user.welcomeMessage()
 user.username = "SANJANA"
 user.welcomeMessage()
console.log(this);

// function chai(){
//     let username ="gyannnnnnnnn"
//     console.log(this);
// }
// chai()

// const chai = ()=>{
//     let username ="gyannnnnnnnn"    // -- ARROW FUNCTIONS IN JS
//     console.log(this.username);
// }
// chai()

// const addTwo = (num1, num2) => ({username: "gyannnn"})
// console.log(addTwo(3, 4))

const addTwo = (num1, num2) => (num1 + num2)
console.log(addTwo(3, 4))


