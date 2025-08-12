
//objects of two types 
// 1.literal
// 2. constructor (object.create)

//singleton  mean when we make with constructor
//literal not make with singleton

//object literal

// const mySY=Symbol("key1")

// const JsUser={
//     name: "Ammar", //here name is key and ammar is value
//     age: 20,
//     location : "Lahore",
//     email: "Ammar@gmail.com",
//     mySY:"mykey1",                                        //used as string 
//     isLoggedin:false,
//     lastLoginDays: ["Monday","saturday"]
// }
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser.mySY);
// console.log(typeof JsUser.mySY);

const mySY=Symbol("key1")     //symbol interested

const JsUser={
    name: "Ammar", //here name is key and ammar is value
    age: 20,
    [mySY] :"mykey1",    //use as symbol but it is string
    location : "Lahore",
    email: "Ammar@gmail.com",
    isLoggedin:false,
    lastLoginDays: ["Monday","saturday"]
}
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser[mySY]);       //used as symbol
console.log(typeof JsUser[mySY]);

JsUser.email="Ammar.com";
// Object.freeze(JsUser);         //the object is to be freeze is JsUser
JsUser.email="Ammarmail.pk"   //Ammarmail.pk is not  overwritten bcz JsUser is freezed
console.log(JsUser);

JsUser.greeting=function(){

    console.log("hello JsUSer") 
}
//--------------------------anonymous means===> return back
JsUser.greetingTwo= function(){
    console.log(`hello JS User, ${this.email}`) //this.==> is used to pic all the objects

}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());