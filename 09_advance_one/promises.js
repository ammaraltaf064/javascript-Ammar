//promises is object
//promise futurre mai hony wali aik chz hai

const promiseOne= new Promise(function(resolve,reject){     //promise apny andr aik callback leta hai
//do an async task
//1: db Call, 2: cryptograpghy,3: networks
setTimeout(function(){
    console.log('async task is completed');
    resolve();//resolve connect hai .then k sath phir is ne call kia .then ko
},1000)
}) 

promiseOne.then(function(){   //.then is a direct connection with resolve and give call callback with a function
console.log("promised done");

})

new Promise(function(resolve,reject){
    setTimeout(function(){
        
        console.log("async task 2");
        resolve()
    }, 1000);
}).then(function(){
    console.log("async 2 resolve");
    
})

const promiseThree= new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "chai",Email: "chai@.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true; // set to true
        if (!error) {
            resolve({ username: "Ammaar", email: "hello@.com" });
        } else {
            reject("Error: Something went wrong");
        }
    }, 1000);
});

promiseFour
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((username) => {
        console.log(username);
    })
    .catch(function(error) {//jo error ay ga wo yha hoga
        console.log(error);
    })
    //finally: jo ap ka kaam hona tha hogya kya?
    .finally(()=> console.log("the promise is either resolved or rejected"));

    const promiseFive= new Promise(function(resolve,reject){
         setTimeout(function() {
        let error = true; // set to true
        if (!error) {
            resolve({ username: "JAVASCRIPT", Password: "123" });
        } else {
            reject("Error: JS went wrong");
        }
    }, 1000);
    });

//async :works as .catch .then
async function consumePromiseFive(){
    try{
        const response= await promiseFive
    console.log(response);
    }
    catch(error)
    {
        console.log(error);
        
    }
    
}
consumePromiseFive()
// async function getAllUesr(){
//    try{
//      const response =await fetch('https://jsonplaceholder.typicode.com/users')
//     const data=  await response.json()//ap json bnn jao wrna ye string mai arha 
//     console.log(data);
 
//    }
//    catch(error){
//     console.log("e: ",error);
    
//    }   
// }
// getAllUesr();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{//phly aik then khtm hoga tb agly pr jy ga
    return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=> console.log(error));
