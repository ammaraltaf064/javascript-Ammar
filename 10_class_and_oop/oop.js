const user= {
    userrname: "Ammar",
    loginAccount: 8,
    signedIn: true,

    getUserDetail :function()
    {
        // console.log(" get user detail");
        // console.log(`username: ${this.userrname}`);//this likha hai tb ye access dega apny samaan ki otherwise ni dega access
        // console.log(this);//sara andr ka datta dega brackets mai
        
        
        
    }
}
// console.log(user.loginAccount);
// console.log(user.getUserDetail());

// console.log(this);//empty brackets dega

// const promise= new Promise() //new is construtor function

function User(UserName,loginAccount,isLoggedIn)
{
    this.username=UserName;
    this.loginAccount=loginAccount;
    this.isLoggedIn=isLoggedIn;
     this.greeting= function()
     {
        console.log(`welcome ${this.username}`);
        
     }

    return this; 
}

//  const UserOne=User("Ammar",23,true);
//  const UserTwo=User("Ali",21,false);
 
//  console.log(UserOne.isLoggedIn);//we can get acess like this ..... (is k liay return zruri hai)
//  console.log(UserOne);// it overwrite the data of UserTwo.......(is k liay return zruri hai)

 //so  agr ap loog data different likhna chahtay then ye likho
 const UserOne= new User("Ammar",23,true);
 const UserTwo= new User("Ali",21,false); //return ki zrurat ni hai
 console.log(UserOne.constructor);//ye btaye tha function user  ka hai
//  console.log(UserOne);
//  console.log(UserTwo);
 

//1:new likhty hain to aik empty object create hota hai jisko instance khty hain
//2: construcot function call hota hai new keyword ki wja se
//3:this keyword : jo ap ne arguemnt likhay huay wo us k andr inject hoty hain
//4: mil jaty function mai

