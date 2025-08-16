const userEmail=""

if(userEmail)
{
    console.log("got user email");
    
}
else{
    console.log("dont have user email");
}

//falsy values
//these are falsy values
//   false,0,-0, BigInt 0n,"",undefined,NaN

//truthy values

// "0","false"," ",[],{},function(){}

if(userEmail.length===0){
    console.log("Array is empty")
}
else
{
    console.log("not equal");
    
}


const emptyobj={}

if(Object.keys(emptyobj).length === 0){
    console.log("object is empty");
    
}
//   ----these are true when we compare
//false == 0
//false == ''
//0==''


//NULLISH COALESCING OPERATOR (??):
// --->HAVE TO SEE ON THESE TWO THINGS--->> NULL UNDEFINED

let val1;
// val1= 5?? 10 //it will give 5
// val1=null??10;//it will assign 10
// val1= undefined ?? 15//it will assign 15

val1=null?? 10??20

console.log(val1);

//terniary Operator

//condition ? true : false

const iceTeaPrice =100;
iceTeaPrice>=80 ? console.log("less than 80") : console.log("more than 80");

