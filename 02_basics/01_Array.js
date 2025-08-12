//Array

const myArr=[0,1,2,3,4,5,6]
console.log(myArr[0]);

const myArr2= new Array(1,2,3,4)
console.log(myArr2[1]);

// Array methods
 
myArr.push(7);//use to add new value in myArr
console.log(myArr);

myArr.pop();//use to remove last value in the array 
console.log(myArr);

myArr.unshift(5); //use to add number in the starting of array but it took load on the system due to shifting all numbers 
//myArr.shift() ;to remove first number from the array
console.log(myArr);

console.log(myArr.includes(9));//it tell that the value in included or not..if yes it give true else false
console.log(myArr.indexOf(3));//at whch index....the value is

const newArr= myArr.join();//it converted it into string and combined form

console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

//Slice and Splice

console.log("All", myArr);

const myn1=myArr.slice(1,3);//it include index 1,2 not 3
 console.log("A",myn1);

 const myn2=myArr.splice(1,3);//it include index 1,2 and also 3
 console.log("B",myn2);
 



