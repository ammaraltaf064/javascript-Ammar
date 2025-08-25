function MultiplyBy5(num)
{
    return num*5
}
MultiplyBy5.power=2;
console.log(MultiplyBy5(5));
console.log(MultiplyBy5.power);
console.log(MultiplyBy5.prototype);//here prototype givw somw properties


//function of object bhi hai function,function bhi hai in javascript or array and string also object

function CreateUser(username,score)
{
    this.username=username;
    this.score=score;
  
}

CreateUser.prototype.increment= function()
{
    this.score++;
}
CreateUser.prototype.printMe= function()
{
    console.log(`score is ${this.score}`); //this mtlb jis yani jis ne bhi score pucha uska score bta do

    
}
const chai =  new CreateUser("chai",25)
const tea=  new CreateUser("tea",250)

chai.printMe()