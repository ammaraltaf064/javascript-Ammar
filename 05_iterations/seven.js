const myNUM=[1,2,3,4,5,6,7,8,9]

//  const num= myNUM.map((num)=>num + 10)
// console.log(num);

const newNum= myNUM
.map((num)=> num*10)
.map((num)=> num+1)
.filter((num)=> num>=40)// filter used for condition
 console.log(newNum);