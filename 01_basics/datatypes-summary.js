//---------------------------javascript is dynamic type----------------------


//primitive

//7 types: String,Number,Boolean,null,undefined,Symbol is used to make the value unique,BigInt: toomuch big value can be handle 

const score=100;
const scorevalue=100.3;
const islogged=false;
const outsideTemp=null;
let userEmail;

const id=Symbol('123');
const id2=Symbol('123');

console.log(id===id2);//so they both are not same the answer is false....
const bigNumber= 213234434445454545133243n;
//reference (Non primitive)

//Array,Object,Function

const heroes=["umer","Ali","Abubakar"]

let MyObj={
    name:"ammar",
    age:22,
    
}
//the typeof null ==> Object


const Myfunction=function(){
    console.log("hello world");
}
//the typeof Myfunction ==> Objectfunction=Function

//static:
//Definition: The type of a variable is known at compile time and cannot change later.

//You must declare the type before using the variable.

//Example (Java):

//int num = 5;   // num is always an integer
//num = "hello"; // ❌ Error: cannot assign a string to an int
//Benefits:

//Catches type errors early (before running the code)

//Usually faster at runtime

//Examples of statically typed languages: C, C++, Java, Rust, Go.

//Definition: The type of a variable is known at runtime and can change at any time.

//You don’t have to declare the type explicitly — the language figures it out while running.

//Example (JavaScript):

//let value = 42;     
//value = "hello";    // ✅ Allowed, type changes from number to string
//Benefits:

//Less code to declare types

//More flexible

//Drawbacks:

//Type-related bugs only appear at runtime

//Can be slower in performance

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//stack(Primitive), Heap(non-premitive)
let mychannelname="ammarEnjoy"

let anotherName=mychannelname;
console.log(anotherName)

anotherName="AnotherChannel";

console.log(mychannelname);
console.log(anotherName);

let userone={
    email:"ammar@123",
    upi: "user123"
}
 let usertwo=userone;
  
 usertwo.email="Ammar145"; //here due to this is heap it gives orignal reference of variable and changed both
 console.log(userone.email)
 console.log(usertwo.email)
//its mean in the stack it makes copy and in the heap it gaves reference that is orignal (not the copy) of that variable

