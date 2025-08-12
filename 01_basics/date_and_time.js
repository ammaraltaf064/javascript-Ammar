//Dates

let myDate= new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// let myCreatedDate= new Date(2023,15,6)

//  let myCreatedDate= new Date(2023,0,23)

//  let myCreatedDate= new Date("2023-01-14")

 let myCreatedDate= new Date("01-12-2023")
// console.log(myCreatedDate.toDateString());

let myTimestamp= Date.now()
//give value in milliseconds
// console.log(myTimestamp);
// console.log(myCreatedDate.getTime());

console.log(Date.now());

let newDate= new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())

// `${newDate.getDay()} and the time `

console.log(newDate.toLocaleString('deafault',{
    weekday:"long",
    hour:"2-digit"
}))
