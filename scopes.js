var c = 4999
let a = 67

if(true){
    let a = 20
    const b = 30
    // var  c = 40
    // console.log(a);
}
// console.log(a);
// console.log(b);
//   console.log(a);

function one(){
    const username = "Gyanendra"
    function two(){
        const website ="youtube"
        // console.log(username);
    }
   // console.log(website); -- Parent function can't access the child function
    two()
}
one()

if(true){
    const username = "gyannnn"
    if(username === "gyannnn"){
        const website = " github145"
        // console.log(username + website);
    }
    // console.log(website); -- Parent function can't access the child function
}
// console.log(username); -- Trying to access outside the scope give you error
// ++++++++++++++++++++  INTERESTING THINGS  +++++++++++++++++++++++++++


console.log(addone(5)); // -- It can initialized before function  is created or declared
function addone(num){
    return num + 1
 }

 const addtwo = function(num){
    return num + 2
 }
 console.log(addtwo(9)); // -- It cannot be initialized before function or expression is declared

