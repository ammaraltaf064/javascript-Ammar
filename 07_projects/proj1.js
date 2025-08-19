const buttons=document.querySelectorAll("button")
const body=document.querySelector("body")

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener("click",function(e){
        console.log(e);//saray buttons ka bta dia
        console.log(e.target);//jis button pr target hua hai yani cursor gya hai uska bta dia
        if(e.target.id==="grey")
        {
            body.style.backgroundColor="grey" // grey likh lo ya phir = e.target.id
        }
        if(e.target.id==="white")
        {
            body.style.backgroundColor="white" // grey likh lo ya phir = e.target.id
        }
        if(e.target.id==="blue")
        {
            body.style.backgroundColor="blue" // grey likh lo ya phir = e.target.id
        }
        if(e.target.id==="yellow")
        {
            body.style.backgroundColor="yellow" // grey likh lo ya phir = e.target.id
        }
        
    });
    
});