let userScore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

const genCompChoice = ()=> {
    const options = ["Rock","Paper","Scissors"];
   // Math.random()
    //rock,paper,scissors
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];

}
const drawGame = ()=> {
    msg.innerText = "game was draw. play again"
     msg.style.backgroundColor = "#081b31"
}
const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compScorePara.innerText = compscore;
        msg.innerText = `you loose!,${compChoice} beats ${userChoice}`
        msg.style.backgroundColor = "red"
    
    }
}

 const playGame = (userChoice) => {
    //generate computer choice 
    const compChoice = genCompChoice();
    if(userChoice === compChoice) {
        //drawGame
        drawGame()
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            //scisors,paper it cant be rock again bcz of else condition 
            userWin = compChoice === "Paper" ?false:true
        }  else if(userChoice === "Paper") {
            //rock or scisors
            userWin = compChoice === "Scissors"?false:true;
        } else {
            //paper,rock
            userWin = compChoice ==="Rock"?false:true       
         }

    
    showWinner(userWin,userChoice,compChoice)
        }


 }


choices.forEach((choice) => {
    choice.addEventListener("click",()=> {
        const userChoice= choice.getAttribute("id");
      //  console.log("choice was clicked",userChoice);
        playGame(userChoice)

    })
})