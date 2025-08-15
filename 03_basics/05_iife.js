//immidiately invoke function expression

//global scope k variables se problem hoti us se bachny k liay iife ka use

(function chai(){
    console.log(`db connected`);
    
})();
//1st one() function def 2nd() execution
(function code(){
console.log(`db connected again`);
})
();//this is call in it

((name)=>{
console.log(`the name of user is: ${name}`);

})("Ammar")