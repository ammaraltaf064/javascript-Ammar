let score="33";
console.log(typeof score);//chk the type of it like  string,number,...etc
console.log(typeof(score));//chk the type of it like  string,number,...etc

let valueInNumber=Number(score)//convert string into number
console.log(typeof valueInNumber);
console.log(valueInNumber);//33ab==>is NaN(not a number)
//if score is equal to null thn it will give 0 number while conversion
//---------this is for the Number(score)---------------------
//"33"=>33
//"33abc"=>NaN
//true==>1; false=>0

let isLogged="fd";

let booleanIsLogged=Boolean(isLogged);
console.log(booleanIsLogged);
//---------this is for the boolean(islogged)---------------------
//1==>true
//0==>false
//"Ammar"==>true
//""==>false

 let SomeNumber= 33;
let StringNumber=String(SomeNumber);
console.log(StringNumber);
console.log(typeof StringNumber);
