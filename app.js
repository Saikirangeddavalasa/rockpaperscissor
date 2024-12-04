let userScore = 0;
let compScore = 0;
const choicesjs = document.querySelectorAll(".choice");
const msgjs = document.querySelector("#msg")
const UserScoreparag = document.querySelector("#user-score")
const CompScoreparag = document.querySelector("#comp-score")

choicesjs.forEach((obj) => {
    console.log(obj)
    obj.addEventListener("click",() => {
        const Userselectedchoice = obj.getAttribute("id"); /* it gets the attribute 
                                                 name of class or id, by just typing
                                                 "id" or "class" */     
        console.log("choice was clicked",Userselectedchoice)
        genCompChoice()
        playGame(Userselectedchoice)
    })
})

const playGame = (Userselectedchoice) => {
    console.log("userchoice =",Userselectedchoice)
    // Generate Computer choice
    const Compselectedchoice = genCompChoice();
    console.log("compchoice =",Compselectedchoice)

    if(Userselectedchoice == Compselectedchoice) {
        drawGame();
    } else {
        let userWin = true;
        if(Userselectedchoice == "rock") {
            // paper,scissor
            userWin = Compselectedchoice == "paper" ? false : true;
        } else if(Userselectedchoice == "paper") {
            // rock,scissor
            userWin = Compselectedchoice == "rock" ? true : false;
        } else { // no need tochek condi as userselchoi is (scissor)
            // rock,paper
            userWin = Compselectedchoice == "rock" ? false : true;
        }
        ShowWinner(userWin,Userselectedchoice,Compselectedchoice)        
    }
}
const genCompChoice = () => {
    const options = ["rock","paper","scissor"]
    // Math.random() chooses ratonal numbers btw 0 to 1(not 0 or 1)
    // Math.floor() converts 2.anything to 2
    // Math.random()*n gives integers from 0,1,2...n
    const randoindx = Math.floor(Math.random()*3)
    return options[randoindx]
}

const drawGame = () => {
    console.log("game was draw")
    msgjs.innerHTML = "Game was Draw. Play again"
    msgjs.style.backgroundColor = "#081b31"
}
const ShowWinner = (userWin,Userselectedchoice,Compselectedchoice) => {
    if(userWin) {
        userScore = userScore + 1;
        msgjs.innerHTML = `You Win! Your ${Userselectedchoice} beats ${Compselectedchoice}`
        msgjs.style.backgroundColor = "green"
        UserScoreparag.innerHTML = userScore
    } else {
        compScore = compScore + 1;
        msgjs.innerHTML = `You Lose. ${Compselectedchoice} beats your ${Userselectedchoice}`
        msgjs.style.backgroundColor = "red"
        CompScoreparag.innerHTML = compScore
    }
}