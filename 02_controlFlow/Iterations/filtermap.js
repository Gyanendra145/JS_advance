// const coding = ["js","ruby", "java","python","cpp"]

// const values = coding.forEach((item)=>{
//     console.log(item);
//     // return item it does not rreturn anything
// })
// console.log(values);





const myNums =[1,2,3,4,5,6,7,8,9]
// const newNums = myNums.filter((num)=> num > 4)
// const newNums = myNums.filter((num)=>  {
//     return num > 4
// })




// const newNums = []
// myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num)
//     }
// })

// console.log(newNums);

// ---------------   MAP   ----------------
const myNumers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumers.map((Num) => {return Num + 10})
// console.log(newNums);

myNumers.forEach((value,index,array)=> {
    array[index]= value + 10;
});
console.log(myNumers);


