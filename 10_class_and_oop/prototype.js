let MyName= "Ammar     ";

let myHeroes=["thor","spiderman"]

let heroPower={
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function()
    {
        console.log(`SPidy power is ${this.spiderman}`);
        
    }
}
Object.prototype.Ammar=function()
{
    console.log(`Ammar is available in All objects`);
    
}
Array.prototype.HeyAmmar=function()
{
console.log(`Ammar say hello`);

}
// heroPower.Ammar()//chly ga
//inherit horhy yr access tb hi ati
myHeroes.Ammar();// ye object ka prototype hai jo k use hota jo k saro ki access le skta like array, function, objects
myHeroes.HeyAmmar();//array ka prototype ,Array tk ka access hota  ye myheroes array hai
// heroPower.HeyAmmar();//ye array ka prototype ni hai isliay ye nai chly ga kyu k ye object hai ye heyAmmar k liay ni chl skta


//inheritance

const user={
    username: "chai",
    email: "email@gmail.com"
}
const teacher= {
    makeVideos : false
}
const  teacherSupport={
    isAvailable:  false
}
const TASupport={
    makeAssignment:'JS Assignment',
    FullTime: true,
    __proto__: teacherSupport   //is ne teacherSupport ki properties ki acccess le li
}

teacher.__proto__= user //teacher access kr rha properties of user
console.log(teacher.email);


//modern Syntax

Object.setPrototypeOf(teacherSupport,teacher);//interitence ka modern syntax


let anotherUserNAme="chaiDosti       "
String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`true length is: ${this.trim().length}`);
}
anotherUserNAme.trueLength()
"Ammar".trueLength();
"icetree".trueLength();