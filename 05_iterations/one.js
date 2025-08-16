//for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5)
    {
        // console.log("5 is best")
    }
    // console.log(element); didn't work
    
}
for(let i=10;i<=10;i++){
    // console.log(`outer loop is: ${i}`);
    
    for(let j=0;j<=10;j++){
        // console.log(`inner loop is: ${j} and inner loop is: ${i}`)
        // console.log(`${i} * ${j} = ${i*j}`)
    }
}
let myArray=["flash","superMan","ali"];
for(let i=0;i<myArray.length;i++)
{
    console.log(myArray[i]);
}

//break And continue
for (let i = 0; i < 5; i++){
    if(i==3)
    {
        console.log(` 3 executed immidiately and after that no one will execute due to break`);
        break;// after break it goes out of the for loop
        
    }
    console.log(i);

}

for (let i = 0; i < 5; i++){
    if(i==3)
    {
        console.log(` 3 executed`);
        continue;// loop will not goes out of for loop but after detected 3 it will move further and complete it iteration
        
    }
    console.log(i);

}
