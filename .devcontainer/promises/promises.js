const promiseOne = new Promise(function(resolve, reject){
    // Do an async tasks
    //  DB cancelIdleCallback, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()     
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
       resolve({username:"Chai", email:"chai@example.com" })
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"gyansingh", passwoed: "123456"})
        } else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

const username= promiseFour.then((user)=>{
   console.log(user);
   return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);   
}).finally(()=> console.log("The promise is either resolved or rejected"))

// const promiseFive= new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({username:"gyansingh", passwoed: "123456"})
//         } else{
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)
// })

// async function consumePromiseFive(){
//     try{
//     const response = await promiseFive
//     console.log(response);
// } catch(error){
//     console.log(error);
// }
// }
// consumePromiseFive()

// async function getAllUsers() {
//     const response = await fetch('https://github.com/Gyanendra145/JS_advance')
//     const data = response.json()
//     console.log(data);  
// }
// getAllUsers()

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false; // Set this to false to test the resolve case
        if(!error){
            resolve({username:"gyansingh", password: "123456"}) // Corrected property name
        } else{
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try{
        const response = await promiseFive;
        console.log(response);
    } catch(error){
        console.log(error);
    }
}
consumePromiseFive();

async function getAllUsers() {
    try {
        const response = await fetch('https://your-api-url.com/endpoint'); // Replace with actual API URL
        const data = await response.json(); // Added await here
        console.log(data);  
    } catch (error) {
        console.log('Error fetching users:', error);
    }
}
getAllUsers();
