//---it will answer in true or false bcz the comparison like ><= etc give the value in true or false

// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

//------------for the comparson javascript consider the "2" as number
// console.log("2" < 1);
// console.log("2" > 1);


//---------------avoid these kind of comparison--------
// -----------this is for the string
// console.log("null" > 0);//false
// console.log("null" == 0);//false
// console.log("null" >= 0);//false

//----------this is without string----null is an empty 

console.log(null > 0);//false
console.log(null == 0);//false
//---------------
//error is given
// console.log(null = 0);
//---------------
console.log(null >= 0);//true
//--------------------------------------------------------
//=== this is strick check ( is mai datatype bhi chk kray ga )
console.log("2" === 2);
  
