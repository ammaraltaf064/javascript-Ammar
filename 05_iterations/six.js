//const coding=["py","javascript","java","cpp"];

//  const values = coding.forEach((item)=>{
//     console.log(item)

// })
// console.log(values);   so foreach cannot return 

//for each didnt return but the filter returns

const MyNum=[1,2,3,4,5,6,7,8];
// const newNum=MyNum.filter((num)=> num > 4 )
// console.log(newNum);

//-------------or---------

// const newNum=MyNum.filter((num)=>
//     {
//         return num > 4 
//     })
// console.log(newNum);

//use of forEach

const newNum=[];
MyNum.forEach((num)=>{
    if(num>4)
    {
        newNum.push(num);
    }
})
console.log(newNum);
 
const Books=[
    {
    title:"book one",genre: "history",publish: 2001,edition:1997 
    },
    {
    title:"book two",genre: "science",publish: 1977,edition:1987 
    },
    {
    title:"book three",genre: "geography",publish: 2011,edition:1956 
    },
];

const newbook=Books.filter((bk)=> bk.genre==='history' )
console.log(newbook);

const booknew=Books.filter((bk)=>{
     return bk.publish>=2000

})
console.log(booknew);