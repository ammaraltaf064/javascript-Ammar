
//{}==>this is scope whhen it used with function
//outside the if this is global scope

let a =300;
if(true)
 {
    let a =10;
    const b= 20;// inside the scope it is block scope 
      //  var c=30; dont use'

console.log("inner a: ",a);
  
}
//the scope works with in the {} curly braces and var is used at outside but don't use this is bad thing ever
//the console.log also work with in the scope,not outside the scope...so the var is bad impression

console.log(a);

// console.log(b);
// console.log(c);

//console screen use of inspect or code environment thorugh node  both havong different global scope


//DOM==> document object model
// means how to manupulate the html through javascript

function one(){//   example of icecream that elder-person will give the ice-cream to younger but younger cannot
    const username="Ammar"

    function two(){
        const website="Youtube"
        console.log(username);

    }
    // console.log(website); //didn't work due to outside of scope
    two();
}
one();

if(true){
    const username="ammar"
    if(username==="ammar"){
        const website="youtube"
        console.log(username + website);
    }
    //console.log(website);//didn't work due to ou tof scope
}
//console.log(username)//didn't work due to out of scope

//++++++++++++++++++++++++INTERSESTING+++++++++++++++++++++++++++++++++++
//console.log(addone(5)); can call before function
function addone(num){
    return num + 1;
}
addone(5);

//addtwo(5); can't declare before like this as given function
const addtwo= function(num){
    return num+2
}
console.log(addtwo(5));
