const user={
    username:"Ammar",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}

//console.log(this);

user.welcomeMessage();
user.username="Ali";
user.welcomeMessage();

//====>    browser global object is window

function chai(){
    let username="Ammar"
    console.log(this.username);// it shows undefined bcz this function only used with objects not with function 

}
chai();

//same like upper function
// const chai= function(){
//     let username="hitesh"
//     console.log(this.username);
// }
// chai();

const chaiz= () => {
      let username="hitesh"
    console.log(this);

}


const addtwo=(num1,num2)=>{
    return num1+num2;// explicite return when we use return
    
}
console.log(addtwo(5,7));



//implicite return
const addother = (num1,num2) => (num1+num2);// no use of brackets or return ---> this is implicite return
addother();

//incase we need to return object we use

const addotherz = (num1,num2) => ({username :'Ammar'});//use of brackets init here 
console.log(addotherz(5,7));

//ok



