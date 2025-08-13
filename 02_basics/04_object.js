//const tinderUser= new Object()  //singleton object

const tinderUser= {}    //non-singleton Object

tinderUser.id="12345ab"
tinderUser.name="Ammar"
tinderUser.islogged= false

// console.log(tinderUser);

const regularUser={
    email: "ali@.com",
    Fullname: {
        UserFullName:{
            firstName:"Ammar",
            lastName:"Altaf"
        }
    }
}
// console.log(regularUser.Fullname.UserFullName.lastName)

const obj1={1: "A",2:"b"};
const obj2={2:"c",4:"D"}

// const obj3={obj1,obj2}    //obj1 and obj2 (it gives alll data but not in  combined form)
// const obj3=Object.assign({},obj1,obj2);//excpet of this we use spread(latest)
//it gives alll data in combined form({}==>target and obj1,obj2==>source)

const obj3={...obj1,...obj2}

console.log(obj3);

const target={a:1,b:2}
const source={b:4,c:5}

const returnedTarget=Object.assign(target,source)

console.log(target)//target get overwrited by source

const users=[
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
]
users[2].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));//to get the key in array form
console.log(Object.values(tinderUser));//to get the value of key in array form
console.log(Object.entries(tinderUser));//it gives keys and entries separately

console.log(tinderUser.hasOwnProperty('islogged')); //to check this property exists or not...it gives value in boolean



