// //use of function as reduce
// const myNum=[1,2,3]
// const total=myNum.reduce(function(accumulator,currentValue){
    // console.log(` acc: ${accumulator} and currentVAl: ${currentValue}`);
    
    //     return accumulator+currentValue},0);
    // console.log(total);
    
    // use of reduce as arrow  function
    const myNum=[1,2,3]
    const innital=0;
    const total=myNum.reduce((accumulator,currentValue)=>accumulator+currentValue,innital);
console.log(total);

const shoppingCart=[
    {
        itemName:"phone",
        price: 599
    },
    {
        itemName:"phone1",
        price: 499
    },
    {
        itemName:"phone3",
        price: 566
    },
]

 const calculate=shoppingCart.reduce((acc,item)=>acc + item.price,0);
 console.log(calculate);
 