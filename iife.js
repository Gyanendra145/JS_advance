// -- Immediately Invoked Function Exepression (IIFE) To prevent GlobaScope pollutions it is used in javascript



(function chai(){
    // NAMED IIFE
    console.log(`DB CONNECTED`);
})();

((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
}) ('Gyann')