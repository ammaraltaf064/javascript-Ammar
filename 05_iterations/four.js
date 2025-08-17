// for in

//this is for object and other purpopse

const myObject={
    js: "javascipt",
    ccp: "c++",
    rb:"ruby",
    swift:"swift by Apple"

}
for (const key in myObject) {
    
    console.log(`${key} :- ${myObject[key]}`);
    
}

const programming=["js","py","cpp","java"]

for (const key in programming) {

    console.log(key+ ":-",programming[key]);
}


//map for in loop didn't work

// const map= new Map()
// map.set('PAK',"Pakistan")
// map.set('USA',"united states")
// map.set('Fr',"France")
// map.set('PAK',"Police")

// for (const key in map) {
//     console.log(key);
// }