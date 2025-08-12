const marvel_heroes=["thor","iron-man","wanda"]
const dc=["superman","flash","batman"];
//  marvel_heroes.push(dc);
//  console.log(marvel_heroes);

//   console.log(marvel_heroes[3]);
//    console.log(marvel_heroes[3][1]);

//concat merge all the heroes
const allHeros=marvel_heroes.concat(dc);
console.log(allHeros);

//spread===> ... represents by 3 dots work same as concat

const All_new_Heros=[...marvel_heroes,...dc]
console.log(All_new_Heros);

const another_Arr=[1,2,3,[5,6],[7,8,[9,10]]]

const real_another_Arr=another_Arr.flat(Infinity);//flat is used to all the subArrays in a single new Array
console.log(real_another_Arr);


console.log(Array.isArray("Ammar"));//it show it is not array ==>false
console.log(Array.from("Ammar"));//it convert into Array
console.log(Array.from({name:"Ammar"})); //interesting

//Array.of is used to write these in an array
 let score1=100;
 let score2=200;
 let score3=300;

 console.log(Array.of(score1,score2,score3));
