//
const coding=["py","javascript","java","cpp"];
coding.forEach(function (item){
    console.log(item);
}   )

//forEach as arrow function
coding.forEach((item)=>{
  console.log(item);
    
})

function Printme(item){
    console.log(item);
}
coding.forEach(Printme);

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);//output is given that   py    0    ['py', 'javascript', 'java', 'cpp']
    //                                                 item  index          arr
})

//["","",""]
//[{},{},{}]
const MYcoding=[
    {
        languageName: "javascript",
        languageFilename: "j"
    },
    {
        languageName: "ruby",
        languageFilename: "rb"
    },
    {
        languageName: "python",
        languageFilename: "py"
    },
]

MYcoding.forEach((item)=>{
    console.log(item.languageFilename);
    
})