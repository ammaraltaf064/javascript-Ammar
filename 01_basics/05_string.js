const name="Ammar";
const repoCount=50;

//console.log(name + repoCount+" Value");instead of this use backtics

console.log(`Hello my name is ${name} and the total counting of student is ${repoCount}`);

const gameName=new String("pub g");
 console.log(gameName[0]);
 console.log(gameName.__proto__);
 console.log(gameName.length);
 console.log(gameName.toUpperCase());
 
 console.log(gameName.charAt(2));
 console.log(gameName.indexOf('b'));

 const newstring=gameName.substring(0,4);
 console.log(newstring);

 const anotherString=gameName.slice(-4,3);
 console.log(anotherString);
 //-4 mean look from end and starts from 4th element from the end and 3 mean start from start and choose 3rd index where it finish

//---example------- 

let arr = [10, 20, 30, 40, 50];
let part = arr.slice(-4, 3);
console.log(part);
//Step-by-step:

//-4 means: start from length - 4 → index 1 (value = 20).

//End at index 3 (exclusive, value at index 3 = 40 is not included).

//Result: [20, 30]

const usetrim=" Ammar ";// remve space from start and end
console.log(usetrim.trim());

//replace()
const usereplace="Ammar";
console.log(usereplace.replace('Ammar',"ali"));

//includes() this is used to know is there this word exists or not....
console.log(usereplace.includes('m'));

//split()
console.log(usereplace.split());



 
