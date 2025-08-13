// function Calculate(...num1){ // sometimes ...=> this is called rest or sometimes it is called spread

//     return num1
// }
// console.log(Calculate(2))
// console.log(Calculate(2,5,6))

function Calculate(val1,val2,...num1){ 

    return num1
}
console.log(Calculate(2,5,6,20))

const user={
    username:"Ammar",
    price: 100
}
function handleObject(Anyobject){

    console.log(`username is ${Anyobject.username} and price is ${Anyobject.price}`);
    
}
handleObject(user)
handleObject({
    username: "sam",
    price:399
})
const myNEwArray=[200,400,100,600];
function returnSecondValue(getArray)
{
    return getArray[1];
}
console.log(returnSecondValue(myNEwArray));