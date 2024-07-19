// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// const month = 3
// switch (month) {
//     case 1:
//         console.log("january");
//         break;
//     case 2:
//         console.log("feb");
//         break;
//     case 3:
//         console.log("march");
//         break;
//     case 4:
//         console.log("april");
//         break;
//     default:
//         console.log("default case match");
//         break;
// }

const userEmail = [ ]
if (userEmail) {
  console.log("got user email");    
} else {
    console.log("dont have user email");
}

//---------------------  falsy values  ------------------
// false, 0, -0, BigInt 0n, "" null, undefined , NaN

//--------------------- Truthy values -----------------------

// "0", "false", " ", [], {}, function(){}

if (userEmail.length === 0) {
    console.log("Array is empty");
    
}

const emptyObj ={}

if (Object.keys(emptyObj).length===0) {
    console.log("Object is empty");
    
}

// Nullish coalescing opertor (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10

var1 = undefined ?? 15

// val1 = null ?? 10 ?? 456
console.log(val1);


