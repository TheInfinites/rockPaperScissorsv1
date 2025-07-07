// selecting stuff
const btn = document.querySelector(".button-container");
const playerPara = document.querySelector(".player-para");
const comPara = document.querySelector(".com-para");
const scorePara = document.querySelector(".score-para");
const totalRound = document.querySelector("input");
const btnStart = document.querySelector("#start");
const finalPara = document.querySelector(".final-para");
const displayRound = document.querySelector(".round-para");

// player scores
let humanScore = 0;
let computerScore = 0;
let key = 0
let roundInput = 3;

//----------------------------------------------------------------------


// rest button
btnStart.addEventListener("mouseup", () => {
    key = 0;
    roundInput = 0;
    roundInput = Number(totalRound.value);
    if (roundInput % 2 == 0){
        roundInput = roundInput + 1;
        console.log(roundInput);
    }

    humanScore = 0;
    computerScore = 0;
    playerPara.textContent = `....`
    comPara.textContent = `....`
    scorePara.textContent = `Score: You = ${humanScore} and Computer = ${computerScore}`
    finalPara.textContent = `....`
    displayRound.textContent = `....`
})
//-----------------------------------------------------------------------

btn.addEventListener("mousedown", (e) => {
    let target = e.target;
    switch (target.id) {
        case "rock":
            target.classList.add("pressed");
            break;
        
        case "paper":
            target.classList.add("pressed");
            break;
        
        case "scissors":
            target.classList.add("pressed");
            break;
    }
})

btn.addEventListener("mouseup", (e) => {
    let target = e.target;
    switch (target.id) {
        case "rock":
            target.classList.remove("pressed");
            break;
        
        case "paper":
            target.classList.remove("pressed");
            break;
        
        case "scissors":
            target.classList.remove("pressed");
            break;
    }
})

// player move logic
btn.addEventListener("mouseup", (e) => {
    
    function getHumanChoice() {

        let target = e.target;
        let humanChoice;
        switch (target.id) {
            case "rock":
                humanChoice = "rock"
                // target.classList.remove("pressed");
                console.log(humanChoice);
                break;
    
            case "paper":
                humanChoice = "paper";
                // target.classList.remove("pressed")
                console.log(humanChoice);
                break;
    
            case "scissors":
                humanChoice = "scissors";
                // target.classList.remove("pressed")
                console.log(humanChoice);
                break;
        }
        playerPara.textContent = `You have chosen ${humanChoice}!`
        return humanChoice;
    }


    function getComputerChoice() {
        let computerChoice;
    
        // generating a random number between 1 and 4
        const minNum = Math.ceil(1);
        const maxNum = Math.floor(4);
        const randomNumber = Math.floor(Math.random() * (maxNum - minNum) + minNum);
    
        // generating the computer choice based on the random number
        if (randomNumber == 1) {
            computerChoice = "rock";
        }
        else if (randomNumber == 2) {
            computerChoice = "paper";
        }
        else {
            computerChoice = "scissors";
        }
    
        comPara.textContent = `Computer have chosen ${computerChoice}!`
        //console.log(computerChoice);
        return computerChoice;   
    }
    

// ----------------------------------------------------------------------------------


    function playRound(humanChoice, computerChoice) {
        let hc = humanChoice;
        let cc = computerChoice;

        if (hc === cc) {
            console.log("It's a tie");
            displayRound.textContent = "It's a tie"
            humanScore += 1;
            computerScore += 1;
        } else if (hc == "rock" && cc == "paper") {
            console.log("Compter wins sucker!");
            displayRound.textContent = "Compter wins sucker!"
            computerScore += 1;
            humanScore += 0;
        } else if (hc == "rock" && cc == "scissors") {
            console.log("You win this round!");
            displayRound.textContent = "You won this round!"
            humanScore +=1;
            computerScore += 0;
        } else if (hc == "scissors" && cc == "rock") {
            console.log("Computer wins bro!!");
            displayRound.textContent = "You lost this round. Have some shame."
            computerScore += 1;
            humanScore += 0;
        } else if (hc == "scissors" && cc == "paper") {
            console.log("Damn, you win");
            displayRound.textContent = "Damn, you won this round"
            humanScore +=1;
            computerScore += 0;
        } else if (hc == "paper" && cc == "rock") {
            console.log("How about that, you win!")
            displayRound.textContent = "Damn, you won this round"
            humanScore += 1;
            computerScore += 0
        } else if (hc == "paper" && cc == "scissors") {
            console.log("Yeah, you lost man");
            displayRound.textContent = "You lost this round. Die."
            computerScore += 1;
            humanScore += 0;
        }
        scorePara.textContent = `Score: You = ${humanScore} and Computer = ${computerScore}`  
        console.log(`Current score is: You = ${humanScore} and Computer = ${computerScore}`);
    };


    if (key < roundInput){
        console.log(roundInput);
        key++;
        console.log(key)
        playRound(getHumanChoice(), getComputerChoice());
    }
    
    if (key >= roundInput){
        humanScore > computerScore ? finalPara.textContent = "Congrats, you won!" : finalPara.textContent = "Thanks for ending the world";
    }
})

//-----------------------------------------------------------------------

