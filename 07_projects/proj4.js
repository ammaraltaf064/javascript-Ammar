const randomNumber = parseInt(Math.random()*100+1);// generated random number
const submit = document.querySelector("#submt") //click button submit k liay jo k event listen kry ga
const inputNumber= document.querySelector("#guessField")
const guesslot= document.querySelector(".guessesprevious") //remainig gueeses out of 10
const remaining= document.querySelector(".lastresult")//last result kya dia
const lowOrHighh= document.querySelector(".lowOrHighh")// telling that value is high or low
const  startover=document.querySelector(".resultPara")//if attemps are finsih start over

const p= document.createElement("p")

let prevGuess=[]; //k pichli guess hui value ko dubara guess na kray
let numGuesses= 1 ;//start from number 1 guess and when it goes to 10 after then it blocks

let PlayGame= true; // it allows you to play game imp hai
if(PlayGame)
{
    submit.addEventListener("click", function(e){ // event form hai to ye apko url/server pr le jy gi isko prevent/rokny k liay default use kray ge
        e.preventDefault();
        const guess= parseInt(inputNumber.value)
        console.log(guess);// to  print number
        validateGuess(guess);//validateGuess function ko pass krwa dia

    })
}

function validateGuess(guess)
{
    //for validation that number should not be negative etc or btw 1-100
    if(isNAN(guess))// to check is that only number
    {
    alert("enter the validate input number")
}
else if(guess <1)
    {
        alert("enter the validate input greater than 1 number")

    }
else if(guess > 100)
    {
        alert("enter the validate input less  than 1 number")

    }
    else{
        prevGuess.push(guess) //to push guess
        if(numGuesses<11) //agr akhri number ho maybe then ye kry ge
        {
            DisplayGuess(guess)// kh lo clean up method hai
            DisplayMessage(`game over. random number was ${randomNumber}`)
            EndGame();
        }
        else{
            DisplayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess)
{
//for checking value is equal to random number or if equal ,display in DIsplayMessage function or if low then say low numebr or if high thn say high
if(guess===randomNumber)
{
    DisplayMessage(`you guess right`)
    EndGame()
}
else if(guess < randomNumber)
    {
        DisplayMessage(`number is too low`)


    }
else if(guess > randomNumber)
    {
            DisplayMessage(`number is too high`)

    }
    
}
function DisplayGuess(guess)
{
    //cleaN PREVIOUS VALUE and remainig guess update kray ga
    inputNumber.value=" ";//cleanup method k new data bhi daal skay
    guesslot.innerHTML +=  `${guess} `// previous guess value show krwaye ga
    numGuesses++;
    remaining.innerHTML=`${11-numGuesses}`

}
  function DisplayMessage(Message){
    //display msg that interact with DOM
lowOrHighh.innerHTML=`<h2>${message}</h2>`    

  }
  function EndGame()
  {
     //end game
     inputNumber.value=" " //clean krny k liay
     inputNumber.setAttribute("disabled","")//yani ab wo or type ni kr skta
     p.classList.add("button")//class which behave like button
     p.innerHTML=`<h2 id="newgame">start newgame</h2>`
     startover.appendChild(p)// p k andr start over agya hai jis k andr likha tha start new game
     PlayGame=false;
     NewGame();
 
  }
 function NewGame()
 {
    //starting new game
    const NewGamebutton= document.querySelector("newGame")
    NewGamebutton.addEventListener("click",function(e){
        randomNumber=  parseInt(Math.random()*100+1);
        prevGuess=1;
        guesslot.innerHTML=""
        remaining.innerHTML=`${11- numGuesses}`
inputNumber.removeAttribute("disabled","")
startover.removeChild(p);
        PlayGame=true;
    })

 }





 