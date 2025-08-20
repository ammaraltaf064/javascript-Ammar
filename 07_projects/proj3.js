// document.querySelector("#clock")
const clock=document.getElementById("clock")

setInterval(function(){ //(event hai)it set interval k kitnay second baad run hoga
    let date=new Date()
// console.log(date.toLocaleTimeString()); //to give date everysecond
clock.innerHTML=date.toLocaleTimeString()

},1000)


