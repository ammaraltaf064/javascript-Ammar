
//["",""]===> string in Array
//[{},{}]==>object  in Array

//for of
const arr=[1,2,3,4,5]

for (const num of arr) {  //num do the work of i=0 like in for loop and on arr the loop is applying
    console.log(num);
}

const greeting="hello!"
for (const greet of greeting) {
    // console.log(`Each char is ${greet}`);
}

// Maps-->we got unique values

const map= new Map()
map.set('PAK',"Pakistan")
map.set('USA',"united states")
map.set('Fr',"France")
map.set('PAK',"Police")//it didnt work due to map gives uniqueness

// console.log(map);

 for(const here of map)
 {
    // console.log(here);
 }

for(const [key,value] of map)
{
    console.log(key,":-",value);
    
}

const myObject={
    'game1': 'NFS',
    'game2': 'spiderman'
}

// for(const [key,value] of myObject)  //object didn't wrok in this structure
// {
//     console.log(key,":-",value);
    
// }