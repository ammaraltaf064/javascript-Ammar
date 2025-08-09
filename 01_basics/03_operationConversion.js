let value=3
let negVal=-value
console.log(negVal);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**2);//2 power of 2
// console.log(2%2);

// let str1="Hello";
// let str2=" Ammar"
// let str3=str1+str2;
// console.log(str3);

// console.log("1"+ 2); //output is 12
// console.log(1+ "2");//output is 12
// console.log("1"+ 2+ 2);//output is 122
// console.log(1+ 2+ "2");//output is 32

// console.log(+true); // + is used to convert the bool into number like true==>1
// console.log(true+); // it will not work error shows
console.log(+""); //it will show 0 bcz ""=>false and due to convertion it shows 0

let num1,num2,num3;

num1=num2=num3=2+2;

let GameCounter=100;
GameCounter++;
console.log(GameCounter);

//practice for post and prefix as increment

let x = 3;
const y = x++;//return value before increment

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;//return value after increment

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"