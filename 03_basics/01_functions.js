function sayMyName(){
    console.log("A")
    console.log("M")
    console.log("M")
    console.log("A")
    console.log("R")
}
//sayMyName();

// function AddTwoNumber(number1,number2){  //numebr1 and number2 is parameter
//      console.log(number1+number2);
// }
// AddTwoNumber(3,4)  //it is arguments 3,4

// function AddTwoNumber(number1,number2){  
//      //  let result= number1+number2;
//      //  return result;

//      // or

//      return number1+number2;
// }
//  const result= AddTwoNumber(3,4) 
//  console.log("result: ",result);
 
 function loginUserMessage(username = "sam"){  //give default value so it is not undefined
     if(username===undefined || !username )
     {
          console.log("please enter something")
          return  //due to this return it will not go in another line if the condiiton is applied
     }
     return `${username} just logged in` 
 }

//  console.log(loginUserMessage("Ammar"))
 console.log(loginUserMessage())//it will show undefined
