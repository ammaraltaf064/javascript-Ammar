const score=400;
console.log(score);

const balance= new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));//fixed  gives the 0 after decimal points like 2==>100.(00)

const otherNumber=23.8435

console.log(otherNumber.toPrecision(3));// at third number it will precise like 123.6==>124 and 23.67==>23.7

const hundreds= 1000000
console.log(hundreds.toLocaleString('en-IN'));// to count the zeros easilly in it

//+++++++++++++++++++++++    MATHS   +++++++++++++++++++++++++++++++++++++
 console.log(Math);
 console.log(Math.abs(-4));
 console.log(Math.round(4.3));
 console.log(Math.ceil(4.3));
 console.log(Math.floor(4.3));
 console.log(Math.sqrt(77));
 console.log(Math.min(4,5,7,3));
console.log(Math.max(4,5,7,3));

console.log(Math.random());//it give the value b/w 0-1
console.log((Math.random()*10) + 1);//it gives the value b/w 0-10 and we use +1 to avoid (0.0)
console.log(Math.floor(Math.random()*10) + 1);

const min =10;
const max= 20;
 
math.random() *(max - min + 1) 
console.log(Math.floor(Math.random() *(max - min + 1))+ min) 